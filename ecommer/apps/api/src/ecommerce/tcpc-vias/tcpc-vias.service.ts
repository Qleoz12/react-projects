import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TcpcItems } from 'src/feature/tcpc-items.entity';
import * as fs from 'fs';
import { TcpcItemConverter } from 'src/converters/tcpc-items-converter';
import { TcpcVias } from 'src/feature/tcpc-vias.entity';

const RUTA_IMAGE = 'items/';

@Injectable()
export class TcpcViasService {
  constructor(
    @InjectRepository(TcpcVias)
    private repository: Repository<TcpcVias>,
  ) {}

  async findAll() {
    try {
      const data = await this.repository.find();
      if (data.length != 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'no existen',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }
}
