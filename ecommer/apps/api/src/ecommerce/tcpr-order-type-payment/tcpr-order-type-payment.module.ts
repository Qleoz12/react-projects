import { Module } from '@nestjs/common';
import { TcprOrderTypePaymentService } from './tcpr-order-type-payment.service';
import { TcprOrderTypePaymentController } from './tcpr-order-type-payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcprOrderTypePayment } from 'src/feature/tcpr-order-type-payment.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TcprOrderTypePayment])],
  controllers: [TcprOrderTypePaymentController],
  providers: [TcprOrderTypePaymentService],
})
export class TcprOrderTypePaymentModule {}
