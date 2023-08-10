import { Module } from '@nestjs/common';
import { TcpcItemsService } from './tcpc-items.service';
import { TcpcItemsController } from './tcpc-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcpcItems } from 'src/feature/tcpc-items.entity';

import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { TcpcItemConverter } from 'src/converters/tcpc-items-converter';

@Module({
  imports: [
    TypeOrmModule.forFeature([TcpcItems]),
    MulterModule.register({
      dest: './items',
      storage: diskStorage({
        destination: './items',
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
  controllers: [TcpcItemsController],
  providers: [TcpcItemsService, TcpcItemConverter],
})
export class TcpcItemsModule {}
