import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcpSPService } from './tcp-sp.service';
import { TcpToppings } from './dto/tcp-toppings.dto';
import { PuntoDto } from './dto/punto.dto';
import { TcpRestaurantsSpDto } from './dto/tcp-restaurants.dto';
import { TcpCreaidordengeneral } from './dto/tcp-creaidordengeneral.dto';

@Controller('tcp-sps')
export class TcpSpsController {
  constructor(private readonly repository: TcpSPService) {}

  @Post()
  async findRestaurants(@Body() request: TcpRestaurantsSpDto) {
    return await this.repository.findRestaurants(request);
  }

  @Post('/toppings')
  async findToppings(@Body() request: TcpToppings) {
    return await this.repository.findToppings(request);
  }

  @Post('/creaidordengeneral')
  async findCreaidordengeneral(@Body() request: TcpCreaidordengeneral) {
    return await this.repository.findcreaidordengeneral(request);
  }
}
