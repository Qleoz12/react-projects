import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { TcpcItemsService } from './tcpc-items.service';
import { TcpcItemDto } from './dto/tcpc-item.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join, resolve } from 'path';

@Controller('tcpc-items')
export class TcpcItemsController {
  constructor(private readonly repository: TcpcItemsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body() dto: TcpcItemDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.repository.create(dto, file);
  }

  @Get()
  async findAll() {
    return await this.repository.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.repository.findOne(+id);
  }

  @Get('category/:id')
  async findBycategory(@Param('id') id: string) {
    return await this.repository.findByCategory(+id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Param('id') id: string,
    @Body() dto: TcpcItemDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.repository.update(+id, dto, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repository.remove(+id);
  }
}
