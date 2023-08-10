import { Module } from '@nestjs/common';
import { TcpcPointSaleService } from './tcpr-point-sale.service';
import { TcpcPointSaleController } from './tcpr-point-sale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcprPointSale } from 'src/feature/tcpr-point-sale.entity';

import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Module({
  imports: [
    TypeOrmModule.forFeature([TcprPointSale]),
    MulterModule.register({
      dest: './banner',
      storage: diskStorage({
        destination: './banner',
        filename: function (req, file, cb) {
          const uniqueSuffix = '_' + Date.now() + '_' + uuidv4();
          const originalName = file.originalname.replace(/\.[^/.]+$/, '');
          const filename = `${originalName.replace(
            /\s+/g,
            '',
          )}${uniqueSuffix}${extname(file.originalname)}`;
          cb(null, filename);
        },
      }),
    }),
  ],
  controllers: [TcpcPointSaleController],
  providers: [TcpcPointSaleService],
})
export class TcpcPointSaleModule {}
