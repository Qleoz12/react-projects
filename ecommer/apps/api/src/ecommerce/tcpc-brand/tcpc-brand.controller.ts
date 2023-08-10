import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcpcBrandService } from './tcpc-brand.service';
import { TcpcBrandDto } from './dto/tcpc-brand.dto';

@Controller('tcpc-brand')
export class TcpcBrandController {
  constructor(private readonly repository: TcpcBrandService) {}

  // @Post()
  // async create(@Body() dto: TcpcBrandDto) {
  //   return await this.repository.create(dto);
  // }

  @Get()
  async findAll() {
    return await this.repository.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.repository.findOne(+id);
  }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() dto: TcpcBrandDto) {
  //   return this.repository.update(id, dto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.repository.remove(+id);
  // }
}
