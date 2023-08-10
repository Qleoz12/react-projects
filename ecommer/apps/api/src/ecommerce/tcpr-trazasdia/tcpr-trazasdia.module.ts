import { Module } from '@nestjs/common';
import { TcprTrazasdiaService } from './tcpr-trazasdia.service';
import { TcprTrazasdiaController } from './tcpr-trazasdia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcprTrazasdia } from 'src/feature/tcpr-trazasdia.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TcprTrazasdia])],
  controllers: [TcprTrazasdiaController],
  providers: [TcprTrazasdiaService],
})
export class TcprTrazasdiaModule {}
