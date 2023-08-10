import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TcpcBrand } from 'src/feature/tcpc-brand.entity';
import { Repository } from 'typeorm';
import { TcpToppings } from './dto/tcp-toppings.dto';
import { PuntoDto } from './dto/punto.dto';
import { TcpRestaurantsSpDto } from './dto/tcp-restaurants.dto copy';

@Injectable()
export class TcpSPService {
  constructor(
    @InjectRepository(TcpcBrand)
    private repository: Repository<TcpcBrand>,
  ) {}

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
    return {
      statusCode: HttpStatus.OK,
      message: 'exito',
      data: data,
    };
  }
}
