import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcpcItemsCategoriesService } from './tcpc-items-categories.service';
import { TcpcItemsCategoryDto } from './dto/tcpc-items-category.dto';

@Controller('tcpc-items-categories')
export class TcpcItemsCategoriesController {
  constructor(private readonly repository: TcpcItemsCategoriesService) {}

  @Get()
  async findAll() {
    return await this.repository.findAll();
  }

  // @Post()
  // async create(@Body() dto: TcpcItemsCategoryDto) {
  //   return await this.repository.create(dto);
  // }

  @Get(':id')
  async findByListPrice(@Param('id') id: string) {
    return await this.repository.findByListPrice(+id);
  }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() dto: TcpcItemsCategoryDto) {
  //   return this.repository.update(id, dto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.repository.remove(+id);
  // }
}
