import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcpcLoginUsers } from './feature/tcpc-login-users.entity';
import { TcprOrderGeneral } from './feature/tcpr-order-general.entity';
import { TcpcItems } from './feature/tcpc-items.entity';
import { TcprOrderDetailManual } from './feature/tcpr-order-detail-manual.entity';
import { TcprOrderTypePayment } from './feature/tcpr-order-type-payment.entity';
import { TcprTrazas } from './feature/tcpr-trazas.entity';
import { TcprTrazasdia } from './feature/tcpr-trazasdia.entity';
import { TcprOrderGeneralManual } from './feature/tcpr-order-general-manual.entity';
import { TcprClient } from './feature/tcpr-client.entity';
import { TcprOrderDetail } from './feature/tcpr-order-detail.entity';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { TcpcItemsCategories } from './feature/tcpc-items-categories';
import { TcprPointSale } from './feature/tcpr-point-sale.entity';
import { TcpcBrand } from './feature/tcpc-brand.entity';
import { ConfigModule } from '@nestjs/config';
import { ItemsListaPrecio } from './feature/tcpr_itemslistaprecio';
import { TcprCategoriasListaPrecio } from './feature/tcpr_categorias-listaprecio';
import { TcpcVias } from './feature/tcpc-vias.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        TcpcItems,
        TcpcLoginUsers,
        TcprClient,
        TcprOrderDetailManual,
        TcprOrderDetail,
        TcprOrderGeneralManual,
        TcprOrderGeneral,
        TcprOrderTypePayment,
        TcprTrazas,
        TcprTrazasdia,
        TcpcItemsCategories,
        TcpcBrand,
        TcprPointSale,
        ItemsListaPrecio,
        TcprCategoriasListaPrecio,
        TcpcVias,
      ],
      synchronize: false,
      autoLoadEntities: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
    }),
    EcommerceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
