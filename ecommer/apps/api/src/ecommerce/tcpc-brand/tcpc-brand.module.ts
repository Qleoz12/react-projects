import { Module } from '@nestjs/common';
import { TcpcBrandService } from './tcpc-brand.service';
import { TcpcBrandController } from './tcpc-brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcpcBrand } from 'src/feature/tcpc-brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TcpcBrand])],
  controllers: [TcpcBrandController],
  providers: [TcpcBrandService],
})
export class TcpcBrandModule {}
