import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcprTrazasService } from './tcpr-trazas.service';
import { TcprTrazasDto } from './dto/tcpr-trazas.dto';

@Controller('tcpr-trazas')
export class TcprTrazasController {
  constructor(private readonly repository: TcprTrazasService) {}

  @Post()
  async create(@Body() dto: TcprTrazasDto) {
    return await this.repository.create(dto);
  }

  @Get()
  async findAll() {
    return await this.repository.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.repository.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: TcprTrazasDto) {
    return this.repository.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repository.remove(+id);
  }
}
