import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TcprTrazas } from 'src/feature/tcpr-trazas.entity';
import { TcprTrazasDto } from './dto/tcpr-trazas.dto';

@Injectable()
export class TcprTrazasService {
  constructor(
    @InjectRepository(TcprTrazas)
    private repository: Repository<TcprTrazas>,
  ) {}
  async create(dto: TcprTrazasDto) {
    try {
      const {
        customerId,
        userId,
        userTransferId,
        userCancelId,
        ...information
      } = dto;

      const data = await this.repository.save({
        ...information,
        customer: { customerId: customerId },
        user: { userId: userId },
        userCancel: { userId: userCancelId },
        userTransfer: { userId: userTransferId },
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Trazas creado con exito',
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
          message: 'Trazas obtenidos con exito',
          data: data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Trazas no existen ',
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
          message: 'Trazas obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Trazas no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async update(id: number, dto: TcprTrazasDto) {
    try {
      const {
        customerId,
        userId,
        userTransferId,
        userCancelId,
        ...information
      } = dto;
      const data = await this.repository
        .createQueryBuilder()
        .update(TcprTrazas)
        .set({
          ...information,
          customer: { customerId: customerId },
          user: { userId: userId },
          userCancel: { userId: userCancelId },
          userTransfer: { userId: userTransferId },
        })
        .where('id = :id', { id })
        .execute();

      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Trazas actualizado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Trazas no existe',
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
          message: 'Trazas eliminado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Trazas no existe',
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
