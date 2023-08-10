import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcprTrazasdiaService } from './tcpr-trazasdia.service';
import { TcprTrazasdiaDto } from './dto/tcpr-trazasdia.dto';

@Controller('tcpr-trazasdia')
export class TcprTrazasdiaController {
  constructor(private readonly repository: TcprTrazasdiaService) {}

  @Post()
  async create(@Body() dto: TcprTrazasdiaDto) {
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
  async update(@Param('id') id: string, @Body() dto: TcprTrazasdiaDto) {
    return await this.repository.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.repository.remove(+id);
  }
}
