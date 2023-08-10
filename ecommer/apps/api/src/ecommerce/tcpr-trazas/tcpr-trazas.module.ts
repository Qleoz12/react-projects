import { Module } from '@nestjs/common';
import { TcprTrazasService } from './tcpr-trazas.service';
import { TcprTrazasController } from './tcpr-trazas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcprTrazas } from 'src/feature/tcpr-trazas.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TcprTrazas])],
  controllers: [TcprTrazasController],
  providers: [TcprTrazasService],
})
export class TcprTrazasModule {}
