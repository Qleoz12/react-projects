import { HttpStatus, Injectable } from '@nestjs/common';
import { TcprOrderDetailDto } from './dto/tcpr-order-detail.dto';
import { TcprOrderDetail } from 'src/feature/tcpr-order-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TcprOrderDetailService {
  constructor(
    @InjectRepository(TcprOrderDetail)
    private repository: Repository<TcprOrderDetail>,
  ) {}
  async create(dto: TcprOrderDetailDto) {
    try {
      const { customerId, ...information } = dto;
      const data = await this.repository.save({
        ...information,
        customer: { customerId: customerId },
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Orden detalle creado con exito',
        data,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async createFromList(dto: Array<TcprOrderDetailDto>) {
    try {
      const savedEntities = await Promise.all(
        dto.map(async (item) => {
          const { customerId, ...information } = item;
          const valuetosave = {
            ...information,
            idSkuItem: information.idSkuItem,
            customer: { customerId: customerId },
          };
          const savedEntity = await this.repository.save(valuetosave);
          return savedEntity;
        }),
      );

      return {
        statusCode: HttpStatus.OK,
        message: 'Orden detalle creado con exito',
        data: savedEntities,
      };
    } catch (error) {
      console.log(error);
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
          message: 'Detalles de ordenes obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Detalles de ordenes no existen',
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
          message: 'Detalle de orden obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Detalle de orden no existe',
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
          message: 'Detalles de ordenes obtenido con exito',
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

  async update(id: number, dto: TcprOrderDetailDto) {
    try {
      const { customerId, ...information } = dto;
      const data = await this.repository
        .createQueryBuilder()
        .update(TcprOrderDetail)
        .set({ ...information, customer: { customerId: customerId } })
        .where(`id = ${id}`)
        .execute();
      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Detalle de orden actualizado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Detalle de orden no existe',
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
          message: 'Detalle de orden eliminado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Detalle de orden no existe',
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
