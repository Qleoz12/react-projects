import { Module } from '@nestjs/common';
import { TcprDescuentosController } from './tcpr-descuentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcprDescuentos } from 'src/feature/tcpr-descuentos.entity';
import { TcprDescuentosService } from './tcpr-descuentos.service';

@Module({
  imports: [TypeOrmModule.forFeature([TcprDescuentos])],
  controllers: [TcprDescuentosController],
  providers: [TcprDescuentosService],
})
export class TcprDescuentosModule {}
