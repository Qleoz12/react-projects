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

@Controller('tcpr-client')
export class TcprDescuentosController {
  constructor(private readonly service: TcprDescuentosService) {}

  @Post()
  async create(@Body() dto: TcprDescuentosDto) {
    return await this.service.create(dto);
  }

  // @Get()
  // async findAll() {
  //   return await this.service.findAll();
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //   return await this.service.findOne(+id);
  // }

  // @Get(':email')
  // async findOne(@Param('email') email: string) {
  //   return await this.service.findOneByEmail(email);
  // }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() dto: TcprClientDto) {
  //   return await this.service.update(+id, dto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return await this.service.remove(+id);
  // }
}
