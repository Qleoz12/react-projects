import { HttpStatus, Injectable } from '@nestjs/common';
import { TcprOrderGeneralDto } from './dto/tcpr-order-general.dto';
import { Repository } from 'typeorm';
import { TcprOrderGeneral } from 'src/feature/tcpr-order-general.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TcprOrderGeneralService {
  constructor(
    @InjectRepository(TcprOrderGeneral)
    private repository: Repository<TcprOrderGeneral>,
  ) {}
  async create(dto: TcprOrderGeneralDto) {
    try {
      const { customerId, userId, cancelUserId, ...information } = dto;
      const data = await this.repository.save({
        ...information,
        customer: { customerId: customerId },
        user: { userId: userId },
        cancelUser: { userId: cancelUserId },
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Orden general creado con exito',
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
          message: 'Ordenes generales obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Ordenes generales no existen',
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
      const data = await this.repository.findOneBy({ id });
      if (data) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Orden general obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Orden general no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async findAllByOrderGeneralId(orderGeneralId: number) {
    try {
      const data = await this.repository.findBy({
        orderGeneralId,
      });
      if (data.length !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Orden general obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Detalles de ordenes no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async update(id: number, dto: TcprOrderGeneralDto) {
    try {
      const { customerId, userId, cancelUserId, ...information } = dto;

      const data = await this.repository
        .createQueryBuilder()
        .update(TcprOrderGeneral)
        .set({
          ...information,
          customer: { customerId: customerId },
          user: { userId: userId },
          cancelUser: { userId: cancelUserId },
        })
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
