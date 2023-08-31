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
import { TcpcViasService } from './tcpc-vias.service';
import { TcpcViasDto } from './dto/tcpc_vias.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join, resolve } from 'path';

@Controller('tcpc-vias')
export class TcpcViasController {
  constructor(private readonly repository: TcpcViasService) {}

  @Get()
  async findAll() {
    return await this.repository.findAll();
  }
}
