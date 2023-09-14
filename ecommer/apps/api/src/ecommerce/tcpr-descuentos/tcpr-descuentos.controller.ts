import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcprDescuentosService } from './tcpr-descuentos.service';
import e from 'express';
import { TcprDescuentosDto } from './dto/tcpr-descuentos.dto';
import { TcprDescuentosRedimirDto } from './dto/tcpr-descuentos.redimir.dto';

@Controller('tcpr-descuentos')
export class TcprDescuentosController {
  constructor(private readonly service: TcprDescuentosService) {}

  @Post()
  async create(@Body() dto: TcprDescuentosDto) {
    return await this.service.create(dto);
  }

  @Put('/redimir')
  async use(@Body() dto: TcprDescuentosRedimirDto) {
    return await this.service.use(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.service.findOne(id);
  }
}
