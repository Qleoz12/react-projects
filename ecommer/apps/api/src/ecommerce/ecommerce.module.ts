import { Module } from '@nestjs/common';

import { TcpcItemsModule } from './tcpc-items/tcpc-items.module';
import { TcpcLoginUsersModule } from './tcpc-login-users/tcpc-login-users.module';
import { TcprClientModule } from './tcpr-client/tcpr-client.module';
import { TcprOrderDetailManualModule } from './tcpr-order-detail-manual/tcpr-order-detail-manual.module';
import { TcprOrderDetailModule } from './tcpr-order-detail/tcpr-order-detail.module';
import { TcprOrderGeneralManualModule } from './tcpr-order-general-manual/tcpr-order-general-manual.module';
import { TcprOrderGeneralModule } from './tcpr-order-general/tcpr-order-general.module';
import { TcprOrderTypePaymentModule } from './tcpr-order-type-payment/tcpr-order-type-payment.module';
import { TcprTrazasModule } from './tcpr-trazas/tcpr-trazas.module';
import { TcprTrazasdiaModule } from './tcpr-trazasdia/tcpr-trazasdia.module';
import { TcpcItemsCategoriesModule } from './tcpc-items-categories/tcpc-items-categories.module';
import { TcpcBrandModule } from './tcpc-brand/tcpc-brand.module';
import { TcpcPointSaleModule } from './tcpc-point-sale/tcpc-point-sale.module';
import { TcpSPModule } from './sps/dto/tcp-sp.module';
@Module({
  imports: [
    TcpcItemsModule,
    TcpcLoginUsersModule,
    TcprClientModule,
    TcprOrderDetailManualModule,
    TcprOrderDetailModule,
    TcprOrderGeneralManualModule,
    TcprOrderGeneralModule,
    TcprOrderTypePaymentModule,
    TcprTrazasModule,
    TcprTrazasdiaModule,
    TcpcItemsCategoriesModule,
    TcpcBrandModule,
    TcpcPointSaleModule,
    TcpSPModule,
  ],
})
export class EcommerceModule {}
