import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TcpcBrand } from 'src/feature/tcpc-brand.entity';
import { Repository } from 'typeorm';
import { TcpToppings } from './dto/tcp-toppings.dto';
import { PuntoDto } from './dto/punto.dto';
import { TcpRestaurantsSpDto } from './dto/tcp-restaurants.dto';
import { TcpCreaidordengeneral } from './dto/tcp-creaidordengeneral.dto';

@Injectable()
export class TcpSPService {
  constructor(
    @InjectRepository(TcpcBrand)
    private repository: Repository<TcpcBrand>,
  ) { }

  async findRestaurants(dto: TcpRestaurantsSpDto) {
    const data = await this.repository.query(
      'call spcp_website_georeferenciacionpunto(?,?,?,?)',
      [dto.lat, dto.lng, 11001, 2],
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'exito',
      data: data,
    };
  }

  async findToppings(dto: TcpToppings) {
    const data = await this.repository.query(
      'call spcp_website_itemseleccion(?,?)',
      [dto.idPunto, dto.skuItem],
    );

    const groupedData = this.groupByNombreGrupoSeleccion(data[0]);

    const result = this.calculateMaxCantidad(groupedData);
    return {
      statusCode: HttpStatus.OK,
      message: 'exito',
      data: data,
      indexes: result,
    };
  }

  async findcreaidordengeneral(dto: TcpCreaidordengeneral) {
    const data = await this.repository.query(
      'call spcp_website_creaidordengeneral(?)',
      [dto.idPunto],
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'exito',
      data: data[0][0],
    };
  }

  private groupByNombreGrupoSeleccion(data: any[]): Map<string, any[]> {
    return data.reduce((acc, item) => {
      if (item.nombreGrupoSeleccion) {
        const key = item.nombreGrupoSeleccion;
        acc.set(key, [...(acc.get(key) || []), item]);
      }
      return acc;
    }, new Map<string, any[]>());
  }

  private calculateMaxCantidad(groupedData: Map<string, any[]>): any[] {
    const result = [];

    groupedData.forEach((group, key) => {
      const maxCantidad = Math.max(...group.map((item) => item.cantidadMaxima));

      result.push({
        nombreGrupoSeleccion: key,
        cantidadMaxima: maxCantidad,
      });
    });

    return result;
  }
}
