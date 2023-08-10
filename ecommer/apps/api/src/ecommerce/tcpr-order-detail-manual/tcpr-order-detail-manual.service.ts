import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TcprOrderDetailManualDto } from './dto/tcpr-order-detail-manual.dto';
import { TcprOrderDetailManual } from 'src/feature/tcpr-order-detail-manual.entity';
@Injectable()
export class TcprOrderDetailManualService {
  constructor(
    @InjectRepository(TcprOrderDetailManual)
    private repository: Repository<TcprOrderDetailManual>,
  ) {}
  async create(dto: TcprOrderDetailManualDto) {
    try {
      const { orderGeneralManualId, ...information } = dto;
      information.dateCreation = new Date();
      const data = await this.repository.save({
        ...information,
        orderGeneralManual: { id: orderGeneralManualId },
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Orden de detalle manual creado con exito',
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
      if (data) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Orden de detalles manuales obtenidos con exito',
          data: data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Orden de detalles manuales no existen ',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.response?.message,
      };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.repository.findOneBy({ id });
      if (data) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Orden de detalles manuales obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Orden de detalles manuales no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async update(id: number, dto: TcprOrderDetailManualDto) {
    try {
      const { orderGeneralManualId, ...information } = dto;
      const data = await this.repository
        .createQueryBuilder()
        .update(TcprOrderDetailManual)
        .set({
          ...information,
          orderGeneralManual: { id: orderGeneralManualId },
        })
        .where('id = :id', { id })
        .execute();

      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Orden de detalle manual actualizado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Orden de detalle manual no existe',
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
          message: 'Orden de detalle manual eliminado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Orden de detalle manual no existe',
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
