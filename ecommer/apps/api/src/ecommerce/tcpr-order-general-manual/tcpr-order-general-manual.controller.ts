import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TcprOrderGeneralManualService } from './tcpr-order-general-manual.service';
import { TcprOrderGeneralManualDto } from './dto/tcpr-order-general-manual.dto';

@Controller('tcpr-order-general-manual')
export class TcprOrderGeneralManualController {
  constructor(private readonly service: TcprOrderGeneralManualService) {}

  @Post()
  async create(
    @Body() createTcprOrderGeneralManualDto: TcprOrderGeneralManualDto,
  ) {
    return await this.service.create(createTcprOrderGeneralManualDto);
  }

  @Get()
  async findAll() {
    return await await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.service.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTcprOrderGeneralManualDto: TcprOrderGeneralManualDto,
  ) {
    return await this.service.update(+id, updateTcprOrderGeneralManualDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.service.remove(+id);
  }
}
