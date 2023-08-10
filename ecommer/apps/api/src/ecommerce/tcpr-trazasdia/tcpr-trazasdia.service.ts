import { HttpStatus, Injectable } from '@nestjs/common';
import { TcprTrazasdiaDto } from './dto/tcpr-trazasdia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TcprTrazasdia } from 'src/feature/tcpr-trazasdia.entity';
@Injectable()
export class TcprTrazasdiaService {
  constructor(
    @InjectRepository(TcprTrazasdia)
    private repository: Repository<TcprTrazasdia>,
  ) {}
  async create(dto: TcprTrazasdiaDto) {
    try {
      const {
        userCancelId,
        userTransferId,
        userId,
        customerId,
        ...information
      } = dto;

      const data = await this.repository.save({
        ...information,
        user: { userId: userId },
        userCancel: { userId: userCancelId },
        userTransfer: { userId: userTransferId },
        customer: { customerId: customerId },
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Trazadia creado con exito',
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
          message: 'Trazadias obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Trazadias no existen',
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
          message: 'Trazadia obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Trazadia no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async update(id: number, dto: TcprTrazasdiaDto) {
    try {
      const {
        userCancelId,
        userTransferId,
        userId,
        customerId,
        ...information
      } = dto;
      const data = await this.repository
        .createQueryBuilder()
        .update(TcprTrazasdia)
        .set({
          ...information,
          user: { userId: userId },
          userCancel: { userId: userCancelId },
          userTransfer: { userId: userTransferId },
          customer: { customerId: customerId },
        })
        .where(`id = ${id}`)
        .execute();
      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Trazadia actualizado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Trazadia no existe',
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
          message: 'Trazadia eliminado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Trazadia no existe',
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
