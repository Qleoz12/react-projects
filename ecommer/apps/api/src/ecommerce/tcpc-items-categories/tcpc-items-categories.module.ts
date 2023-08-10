import { Module } from '@nestjs/common';
import { TcpcItemsCategoriesService } from './tcpc-items-categories.service';
import { TcpcItemsCategoriesController } from './tcpc-items-categories.controller';
import { TcpcItemsCategories } from 'src/feature/tcpc-items-categories';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TcpcItemsCategories])],
  controllers: [TcpcItemsCategoriesController],
  providers: [TcpcItemsCategoriesService],
})
export class TcpcItemsCategoriesModule {}
