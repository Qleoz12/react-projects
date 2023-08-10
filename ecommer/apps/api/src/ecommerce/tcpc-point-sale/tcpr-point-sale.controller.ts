import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { TcpcPointSaleService } from './tcpr-point-sale.service';
import { TcprPointSaleDto } from './dto/tcpr-point-sale.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('tcpc-point-sale')
export class TcpcPointSaleController {
  constructor(private readonly repository: TcpcPointSaleService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'imgLogo', maxCount: 1 },
      { name: 'imgCabezote', maxCount: 1 },
    ]),
  )
  async create(
    @Body() dto: TcprPointSaleDto,
    @UploadedFiles()
    files: {
      imgLogo?: Express.Multer.File[];
      imgCabezote?: Express.Multer.File[];
    },
  ) {
    return await this.repository.create(
      dto,
      files?.imgLogo,
      files?.imgCabezote,
    );
  }

  @Get()
  async findAll() {
    return await this.repository.findAll();
  }

  @Get(':pointId')
  async findOne(@Param('pointId') pointId: number) {
    return await this.repository.findOne(pointId);
  }

  @Put(':pointId')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'imgLogo', maxCount: 1 },
      { name: 'imgCabezote', maxCount: 1 },
    ]),
  )
  async update(
    @Param('pointId') pointId: number,
    @Body() dto: TcprPointSaleDto,
    @UploadedFiles()
    files: {
      imgLogo?: Express.Multer.File[];
      imgCabezote?: Express.Multer.File[];
    },
  ) {
    return await this.repository.update(
      pointId,
      dto,
      files?.imgLogo,
      files?.imgCabezote,
    );
  }

  @Delete(':pointId')
  async remove(@Param('pointId') pointId: number) {
    return await this.repository.remove(pointId);
  }
}
