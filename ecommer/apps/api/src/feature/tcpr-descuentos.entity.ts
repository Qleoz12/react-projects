import {
  Column,
  Double,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tcpr_descuentos', schema: 'integration' })
export class TcprDescuentos {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idDescuento' })
  id: number;

  // *TODO create relation entity */
  @Column({ type: 'bigint', name: 'idTipoDescuento' })
  idTipoDescuento: number;

  // *TODO create relation entity */
  @Column({ type: 'bigint', name: 'idOrdengeneral' })
  idOrdengeneral: number;

  @Column('text', { name: 'skuItem' })
  skuItem: string;

  @Column('text', { name: 'codigoDescuento' })
  codigoDescuento: string;

  @Column({ type: 'bigint', name: 'porcentaje' })
  porcentaje: number;

  @Column({ type: 'datetime', name: 'fechaRedencion' })
  fechaRedencion: Date;

  @Column('datetime', { name: 'fechaVencimiento' })
  fechaVencimiento: Date;

  @Column('datetime', { name: 'fechaCrea' })
  fechaCrea: Date;

  @Column('int', { name: 'activo' })
  activo: number;
}
