import { Module } from '@nestjs/common';
import { TcprClientService } from './tcpr-client.service';
import { TcprClientController } from './tcpr-client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcprClient } from 'src/feature/tcpr-client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TcprClient])],
  controllers: [TcprClientController],
  providers: [TcprClientService],
})
export class TcprClientModule {}
