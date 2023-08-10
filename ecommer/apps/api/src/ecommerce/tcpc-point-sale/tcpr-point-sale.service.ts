import { HttpStatus, Injectable } from '@nestjs/common';
import { TcprPointSaleDto } from './dto/tcpr-point-sale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TcprPointSale } from 'src/feature/tcpr-point-sale.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs';

const RUTA_IMAGE = 'banner/';
@Injectable()
export class TcpcPointSaleService {
  constructor(
    @InjectRepository(TcprPointSale)
    private repository: Repository<TcprPointSale>,
  ) {}
  async create(
    dto: TcprPointSaleDto,
    imgLogo: Express.Multer.File[],
    imgCabezote: Express.Multer.File[],
  ) {
    try {
      if (imgLogo === undefined || imgCabezote === undefined) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'El logo y el cabezote no deben estar vacio',
        };
      }
      const imgLogoPath = RUTA_IMAGE + imgLogo[0].filename;
      const imgCabezotePath = RUTA_IMAGE + imgCabezote[0].filename;

      const { brandId, ...information } = dto;
      const data = await this.repository.save({
        ...information,
        brand: { brandId },
        imgCabezote: imgLogoPath,
        imgLogo: imgCabezotePath,
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Punto de venta creado con exito',
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
          message: 'Puntos de ventas obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Puntos de ventas no existen',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async findOne(pointId: number) {
    try {
      const data = await this.repository.findOneBy({ pointId });
      if (data) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Punto de venta obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Punto de venta no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async update(
    pointId: number,
    dto: TcprPointSaleDto,
    imgLogo: Express.Multer.File[],
    imgCabezote: Express.Multer.File[],
  ) {
    try {
      let data: any;
      if (imgLogo !== undefined) {
        const itemExit = await this.repository.findOneBy({ pointId });
        const imgLogoPath = RUTA_IMAGE + imgLogo[0].filename;
        try {
          fs.unlinkSync(itemExit?.imgLogo);
        } catch (error) {}
        const { brandId, ...information } = dto;

        data = await this.repository
          .createQueryBuilder()
          .update(TcprPointSale)
          .set({ ...information, brand: { brandId }, imgLogo: imgLogoPath })
          .where(`pointId = ${pointId}`)
          .execute();
      }
      if (imgCabezote !== undefined) {
        const itemExit = await this.repository.findOneBy({ pointId });
        const imgCabezotePath = RUTA_IMAGE + imgCabezote[0].filename;
        try {
          fs.unlinkSync(itemExit?.imgCabezote);
        } catch (error) {}
        const { brandId, ...information } = dto;

        data = await this.repository
          .createQueryBuilder()
          .update(TcprPointSale)
          .set({
            ...information,
            brand: { brandId },
            imgCabezote: imgCabezotePath,
          })
          .where(`pointId = ${pointId}`)
          .execute();
      }

      if (imgCabezote === undefined && imgLogo === undefined) {
        const { brandId, ...information } = dto;
        data = await this.repository
          .createQueryBuilder()
          .update(TcprPointSale)
          .set({
            ...information,
            brand: { brandId },
          })
          .where(`pointId = ${pointId}`)
          .execute();
      }

      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Punto de venta actualizado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Punto de venta no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async remove(pointId: number) {
    try {
      const data = await this.repository.delete({ pointId });
      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Punto de venta eliminado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Punto de venta no existe',
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
