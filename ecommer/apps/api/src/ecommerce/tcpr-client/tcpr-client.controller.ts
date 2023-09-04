import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcprClientService } from './tcpr-client.service';
import { TcprClientDto } from './dto/tcpr-client.dto';
import e from 'express';

@Controller('tcpr-client')
export class TcprClientController {
  constructor(private readonly service: TcprClientService) {}

  @Post()
  async create(@Body() dto: TcprClientDto) {
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

  @Get(':email')
  async findOne(@Param('email') email: string) {
    return await this.service.findOneByEmail(email);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: TcprClientDto) {
    return await this.service.update(+id, dto);
  }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return await this.service.remove(+id);
  // }
}
