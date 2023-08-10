import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from 'typeorm';
import { TcprOrderGeneralManual } from './tcpr-order-general-manual.entity';

@Entity('tcpr_ordendetallemanual', { schema: 'integration' })
export class TcprOrderDetailManual {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @ManyToOne(() => TcprOrderGeneralManual, { eager: true })
  @JoinColumn({ name: 'idOrdenGeneralManual', referencedColumnName: 'id' })
  orderGeneralManual: TcprOrderGeneralManual;

  @PrimaryColumn('bigint', { name: 'idPunto' })
  pointId: number;

  @Column('text', { name: 'idOrdenNumero' })
  orderNumberId: string;

  @Column('text', { name: 'idSkuItem' })
  skuItemIs: string;

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
