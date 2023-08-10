import { HttpStatus, Injectable } from '@nestjs/common';
import { TcprOrderTypePaymentDto } from './dto/tcpr-order-type-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TcprOrderTypePayment } from 'src/feature/tcpr-order-type-payment.entity';
@Injectable()
export class TcprOrderTypePaymentService {
  constructor(
    @InjectRepository(TcprOrderTypePayment)
    private repository: Repository<TcprOrderTypePayment>,
  ) {}
  async create(dto: TcprOrderTypePaymentDto) {
    try {
      const data = await this.repository.save(dto);
      return {
        statusCode: HttpStatus.OK,
        message: 'Orden tipo pago creado con exito',
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
          message: 'Orden tipo pago obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Orden tipo pago no existen',
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
          message: 'Orden tipo pago obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Orden tipo pago no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async update(id: number, dto: TcprOrderTypePaymentDto) {
    try {
      const data = await this.repository
        .createQueryBuilder()
        .update(TcprOrderTypePayment)
        .set(dto)
        .where(`id = ${id}`)
        .execute();
      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Orden tipo pago actualizado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Orden tipo pago no existe',
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
          message: 'Orden tipo pago eliminado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Orden tipo pago no existe',
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
