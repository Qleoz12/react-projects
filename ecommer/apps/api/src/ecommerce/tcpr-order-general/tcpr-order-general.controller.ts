import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcprOrderGeneralService } from './tcpr-order-general.service';
import { TcprOrderGeneralDto } from './dto/tcpr-order-general.dto';

@Controller('tcpr-order-general')
export class TcprOrderGeneralController {
  constructor(private readonly service: TcprOrderGeneralService) {}

  @Post()
  async create(@Body() dto: TcprOrderGeneralDto) {
    return await this.service.create(dto);
  }

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.service.findOne(id);
  }
  @Get('orderGeneralId/:orderDetailId')
  async findAllByOrderGeneralOrderDetailId(
    @Param('orderDetailId') orderDetailId: number,
  ) {
    return await this.service.findAllByOrderGeneralId(orderDetailId);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: TcprOrderGeneralDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
