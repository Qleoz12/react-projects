import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcprOrderTypePaymentService } from './tcpr-order-type-payment.service';
import { TcprOrderTypePaymentDto } from './dto/tcpr-order-type-payment.dto';

@Controller('tcpr-order-type-payment')
export class TcprOrderTypePaymentController {
  constructor(private readonly repository: TcprOrderTypePaymentService) {}

  @Post()
  async create(@Body() dto: TcprOrderTypePaymentDto) {
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
  update(@Param('id') id: string, @Body() dto: TcprOrderTypePaymentDto) {
    return this.repository.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repository.remove(+id);
  }
}
