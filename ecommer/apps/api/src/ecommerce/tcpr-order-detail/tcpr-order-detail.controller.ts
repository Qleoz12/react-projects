import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcprOrderDetailService } from './tcpr-order-detail.service';
import { TcprOrderDetailDto } from './dto/tcpr-order-detail.dto';

@Controller('tcpr-order-detail')
export class TcprOrderDetailController {
  constructor(private readonly service: TcprOrderDetailService) {}

  @Post()
  async create(@Body() dto: TcprOrderDetailDto) {
    return await this.service.create(dto);
  }

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.service.findOne(+id);
  }

  @Get('orderGeneralId/:orderDetailId')
  async findAllByOrderGeneralOrderDetailId(
    @Param('orderDetailId') orderDetailId: number,
  ) {
    return await this.service.findAllByOrderGeneralId(orderDetailId);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: TcprOrderDetailDto) {
    return await this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
