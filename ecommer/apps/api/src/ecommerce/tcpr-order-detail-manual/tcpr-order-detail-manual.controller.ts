import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcprOrderDetailManualService } from './tcpr-order-detail-manual.service';
import { TcprOrderDetailManualDto } from './dto/tcpr-order-detail-manual.dto';

@Controller('tcpr-order-detail-manual')
export class TcprOrderDetailManualController {
  constructor(private readonly repository: TcprOrderDetailManualService) {}

  @Post()
  async create(@Body() dto: TcprOrderDetailManualDto) {
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
  update(@Param('id') id: string, @Body() dto: TcprOrderDetailManualDto) {
    return this.repository.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repository.remove(+id);
  }
}
