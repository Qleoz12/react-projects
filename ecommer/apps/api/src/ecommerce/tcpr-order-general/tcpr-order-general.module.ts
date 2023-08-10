import { Module } from '@nestjs/common';
import { TcprOrderGeneralService } from './tcpr-order-general.service';
import { TcprOrderGeneralController } from './tcpr-order-general.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcprOrderGeneral } from 'src/feature/tcpr-order-general.entity';
import { TcpcLoginUsers } from 'src/feature/tcpc-login-users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TcprOrderGeneral, TcpcLoginUsers])],
  controllers: [TcprOrderGeneralController],
  providers: [TcprOrderGeneralService],
})
export class TcprOrderGeneralModule {}
