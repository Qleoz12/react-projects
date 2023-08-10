import { Module } from '@nestjs/common';
import { TcprOrderDetailService } from './tcpr-order-detail.service';
import { TcprOrderDetailController } from './tcpr-order-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcprOrderDetail } from 'src/feature/tcpr-order-detail.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TcprOrderDetail])],
  controllers: [TcprOrderDetailController],
  providers: [TcprOrderDetailService],
})
export class TcprOrderDetailModule {}
