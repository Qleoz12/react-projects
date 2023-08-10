import { HttpStatus, Injectable } from '@nestjs/common';
import { TcprOrderGeneralManualDto } from './dto/tcpr-order-general-manual.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TcprOrderGeneralManual } from 'src/feature/tcpr-order-general-manual.entity';
@Injectable()
export class TcprOrderGeneralManualService {
  constructor(
    @InjectRepository(TcprOrderGeneralManual)
    private repository: Repository<TcprOrderGeneralManual>,
  ) {}
  async create(dto: TcprOrderGeneralManualDto) {
    try {
      const data = await this.repository.save({
        ...dto,
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Orden general manual creado con exito',
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
          message: 'Ordenes general manual obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Ordenes general manual no existen',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.repository.findOne({ where: { id } });
      if (data) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Orden general manual obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Orden general manual no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async update(id: number, dto: TcprOrderGeneralManualDto) {
    try {
      const data = await this.repository
        .createQueryBuilder()
        .update(TcprOrderGeneralManual)
        .set(dto)
        .where(`id = ${id}`)
        .execute();
      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Orden general manual actualizado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Orden general manual no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async remove(id: number) {
    try {
      const data = await this.repository.delete({ id });
      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Orden general manual eliminado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Orden general manual no existe',
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
