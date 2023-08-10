import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TcpSpsController } from '../tcp-sp.controller';
import { TcpSPService } from '../tcp-sp.service';
import { TcpcBrand } from 'src/feature/tcpc-brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TcpcBrand])],
  controllers: [TcpSpsController],
  providers: [TcpSPService],
})
export class TcpSPModule {}
