import { HttpStatus, Injectable } from '@nestjs/common';
import { TcpcItemDto } from './dto/tcpc-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TcpcItems } from 'src/feature/tcpc-items.entity';
import * as fs from 'fs';
import { TcpcItemConverter } from 'src/converters/tcpc-items-converter';

const RUTA_IMAGE = 'items/';

@Injectable()
export class TcpcItemsService {
  constructor(
    @InjectRepository(TcpcItems)
    private repository: Repository<TcpcItems>,

    private tcpcItemConverter: TcpcItemConverter,
  ) {}
  async create(dto: TcpcItemDto, file: Express.Multer.File) {
    try {
      if (file?.fieldname === undefined) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'image field cannot be empty',
        };
      }
      const imagePath = RUTA_IMAGE + file.filename;
      const data = await this.repository.save({
        ...dto,
        dateCreation: new Date(),
        image: imagePath,
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Items creado con exito',
        data,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async findAll() {
    try {
      const data = await this.repository.find();
      if (data.length != 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Items  obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Items  no existen',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async findOne(itemId: number) {
    try {
      const data = await this.repository.findOneBy({ itemId });
      if (data) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Item obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Item no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async findByCategory(categoryId: number) {
    try {
      const data = await this.repository.find({
        relations: {
          itemsListaPrecio: true,
        },
        where: {
          categoryId: categoryId,
        },
      });

      const dataConverted =
        this.tcpcItemConverter.convertDataToTcpcItemDtoList(data);
      if (data) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Item obtenido con exito',
          dataConverted,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Item no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async update(itemId: number, dto: TcpcItemDto, file: Express.Multer.File) {
    try {
      let data: any;
      if (file?.fieldname !== undefined) {
        const itemExit = await this.repository.findOneBy({ itemId });
        const imagePath = RUTA_IMAGE + file?.filename;
        try {
          fs.unlinkSync(itemExit?.image);
        } catch (error) {}
        data = await this.repository
          .createQueryBuilder()
          .update(TcpcItems)
          .set({ ...dto, image: imagePath })
          .where(`itemId = ${itemId}`)
          .execute();
      } else {
        data = await this.repository
          .createQueryBuilder()
          .update(TcpcItems)
          .set({ ...dto })
          .where(`itemId = ${itemId}`)
          .execute();
      }

      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Item actualizado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Item no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async remove(itemId: number) {
    try {
      const item = await this.repository.findOneBy({ itemId });
      if (item) {
        try {
          fs.unlinkSync(item.image);
        } catch (error) {}
      }
      const data = await this.repository.delete({ itemId });
      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Item eliminado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Item no existe',
          affected: data.affected,
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }
}
