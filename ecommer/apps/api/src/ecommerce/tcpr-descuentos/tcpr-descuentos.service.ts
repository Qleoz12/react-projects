import { HttpStatus, Injectable } from '@nestjs/common';
import { TcprDescuentosDto } from './dto/tcpr-descuentos.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TcprClient } from 'src/feature/tcpr-client.entity';
import { Repository } from 'typeorm';
import { TcprDescuentos } from 'src/feature/tcpr-descuentos.entity';
import { TcprDescuentosRedimirDto } from './dto/tcpr-descuentos.redimir.dto';

@Injectable()
export class TcprDescuentosService {
  constructor(
    @InjectRepository(TcprDescuentos)
    private repository: Repository<TcprDescuentos>,
  ) { }
  async create(dto: TcprDescuentosDto) {
    try {
      // dto.dateCreation = new Date();
      const data = await this.repository.save(dto);
      return {
        statusCode: HttpStatus.OK,
        message: 'Cliente creado con exito',
        data,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async findOne(skuItem: string) {
    try {
      const data = await this.repository.find({
        where: {
          skuItem: skuItem,
        },
      });
      if (data && data.length > 0) {
        if (data[0].fechaVencimiento < new Date()) {
          return {
            statusCode: HttpStatus.NOT_FOUND,
            message: 'La promoción ya no está Vigente',
            data,
          };
        }
        return {
          statusCode: HttpStatus.OK,
          message: 'descuento obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'descuento no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async use(dto: TcprDescuentosRedimirDto) {
    try {
      const descuento = await this.repository.find({
        where: {
          id: dto.id,
        },
      });

      if (!descuento && descuento.length > 0) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'no existe',
        };
      }
      const data = await this.repository
        .createQueryBuilder()
        .update(TcprDescuentos)
        .set({ idOrdengeneral: descuento[0].idOrdengeneral + 1 })
        .where(`id = ${dto.id}`)
        .execute();
      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'redimido',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'no existe',
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
