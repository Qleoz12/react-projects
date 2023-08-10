import { HttpStatus, Injectable } from '@nestjs/common';
import { TcpcBrandDto } from './dto/tcpc-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TcpcBrand } from 'src/feature/tcpc-brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TcpcBrandService {
  constructor(
    @InjectRepository(TcpcBrand)
    private repository: Repository<TcpcBrand>,
  ) {}
  // async create(dto: TcpcBrandDto) {
  //   try {
  //     const { customerId, ...information } = dto;
  //     const data = await this.repository.save({
  //       ...information,
  //       customer: { customerId: customerId },
  //     });
  //     return {
  //       statusCode: HttpStatus.OK,
  //       message: 'Marca creado con exito',
  //       data,
  //     };
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error?.message,
  //     };
  //   }
  // }

  async findAll() {
    try {
      const data = await this.repository.find();
      if (data.length != 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Marcas obtenidas con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Marcas no existen',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async findOne(brandId: number) {
    try {
      const data = await this.repository.findOneBy({ brandId });
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
  // async findAllByOrderGeneralId(orderGeneralId: number) {
  //   try {
  //     const data = await this.repository.findBy({
  //       orderGeneralId,
  //     });
  //     if (data.length !== 0) {
  //       return {
  //         statusCode: HttpStatus.OK,
  //         message: 'Marcas obtenidas con exito',
  //         data,
  //       };
  //     } else {
  //       return {
  //         statusCode: HttpStatus.BAD_REQUEST,
  //         message: 'Marcas no existe',
  //       };
  //     }
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error?.message,
  //     };
  //   }
  // }

  // async update(id: number, dto: TcpcBrandDto) {
  //   try {
  //     const { customerId, ...information } = dto;
  //     const data = await this.repository
  //       .createQueryBuilder()
  //       .update(TcprOrderDetail)
  //       .set({ ...information, customer: { customerId: customerId } })
  //       .where(`id = ${id}`)
  //       .execute();
  //     if (data.affected !== 0) {
  //       return {
  //         statusCode: HttpStatus.OK,
  //         message: 'Detalle de orden actualizado con exito',
  //         affected: data.affected,
  //       };
  //     } else {
  //       return {
  //         statusCode: HttpStatus.BAD_REQUEST,
  //         message: 'Detalle de orden no existe',
  //       };
  //     }
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error?.message,
  //     };
  //   }
  // }

  // async remove(brandId: number) {
  //   try {
  //     const data = await this.repository.delete({ brandId });
  //     if (data.affected !== 0) {
  //       return {
  //         statusCode: HttpStatus.OK,
  //         message: 'Detalle de orden eliminado con exito',
  //         affected: data.affected,
  //       };
  //     } else {
  //       return {
  //         statusCode: HttpStatus.BAD_REQUEST,
  //         message: 'Detalle de orden no existe',
  //         affected: data.affected,
  //       };
  //     }
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error?.message,
  //     };
  //   }
  // }
}
