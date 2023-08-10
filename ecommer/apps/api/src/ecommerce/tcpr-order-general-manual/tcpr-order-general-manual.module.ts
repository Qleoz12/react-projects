import { Module } from '@nestjs/common';
import { TcprOrderGeneralManualService } from './tcpr-order-general-manual.service';
import { TcprOrderGeneralManualController } from './tcpr-order-general-manual.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcprOrderGeneralManual } from 'src/feature/tcpr-order-general-manual.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TcprOrderGeneralManual])],
  controllers: [TcprOrderGeneralManualController],
  providers: [TcprOrderGeneralManualService],
})
export class TcprOrderGeneralManualModule {}
