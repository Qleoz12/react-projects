import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
// import { TcpcItemConverter } from 'src/converters/tcpc-items-converter';
import { TcpcViasService } from './tcpc-vias.service';
import { TcpcViasController } from './tcpc-vias.controller';
import { TcpcVias } from 'src/feature/tcpc-vias.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TcpcVias]),
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
  controllers: [TcpcViasController],
  providers: [TcpcViasService],
})
export class TcpcViasModule {}
