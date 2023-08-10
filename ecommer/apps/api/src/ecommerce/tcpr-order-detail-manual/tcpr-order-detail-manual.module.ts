import { Module } from '@nestjs/common';
import { TcprOrderDetailManualService } from './tcpr-order-detail-manual.service';
import { TcprOrderDetailManualController } from './tcpr-order-detail-manual.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcprOrderDetailManual } from 'src/feature/tcpr-order-detail-manual.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TcprOrderDetailManual])],

  controllers: [TcprOrderDetailManualController],
  providers: [TcprOrderDetailManualService],
})
export class TcprOrderDetailManualModule {}
