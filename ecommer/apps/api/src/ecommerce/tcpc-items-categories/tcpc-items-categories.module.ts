import { Module } from '@nestjs/common';
import { TcpcItemsCategoriesService } from './tcpc-items-categories.service';
import { TcpcItemsCategoriesController } from './tcpc-items-categories.controller';
import { TcpcItemsCategories } from 'src/feature/tcpc-items-categories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcprCategoriasListaPrecio } from 'src/feature/tcpr_categorias-listaprecio';

@Module({
  imports: [
    TypeOrmModule.forFeature([TcpcItemsCategories, TcprCategoriasListaPrecio]),
  ],
  controllers: [TcpcItemsCategoriesController],
  providers: [TcpcItemsCategoriesService],
})
export class TcpcItemsCategoriesModule {}
