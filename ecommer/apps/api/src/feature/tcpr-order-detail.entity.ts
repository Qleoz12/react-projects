import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from 'typeorm';
import { TcprClient } from './tcpr-client.entity';

@Entity('tcpr_ordendetalle', { schema: 'integration' })
export class TcprOrderDetail {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @ManyToOne(() => TcprClient, { eager: true })
  @JoinColumn({ name: 'idCliente', referencedColumnName: 'customerId' })
  customer: TcprClient;

  @Column('bigint', { name: 'idPunto' })
  pointId: number;

  @PrimaryColumn('bigint', { name: 'idMultiPunto' })
  multiPointId: number;

  @Column('bigint', { name: 'idOrdenGeneral' })
  orderGeneralId: number;

  @Column('text', { name: 'idOrdenNumero' })
  orderNumberId: string;

  @Column('text', { name: 'idSkuItem' })
  skuItemId: string;

  @Column('varchar', { name: 'skuItem' })
  skuItem: string;

  @Column('text', { name: 'itemNombre' })
  itemName: string;

  @Column('varchar', { name: 'tipoItem' })
  itemType: string;

  @Column('varchar', { name: 'skuItemPrincipal' })
  skuItemPrincipal: string;

  @Column('double', { name: 'valorBaseUni' })
  valueBaseUni: number;

  @Column('double', { name: 'valorUnitario' })
  valueUnitary: number;

  @Column('double', { name: 'porcentajeDescuento' })
  percentageDiscount: number;

  @Column('double', { name: 'valorDescuento' })
  discountvalue: number;

  @Column('int', { name: 'cantidad' })
  amount: number;

  @Column('double', { name: 'valorBaseTotal' })
  valueBaseTotal: number;

  @Column('double', { name: 'valorTotal' })
  valueTotal: number;

  @Column('text', { name: 'observacion' })
  observation: string;

  @Column('datetime', { name: 'fechaCrea' })
  dateCreation: Date;
}
