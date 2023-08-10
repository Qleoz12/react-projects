import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { TcpcItems } from './tcpc-items.entity';
// import { PuntoVenta } from './PuntoVenta'; // Import your PuntoVenta entity
// import { Item } from './Item'; // Import your Item entity

@Entity({ name: 'tcpr_itemslistaprecio' })
export class ItemsListaPrecio {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column({ type: 'int' })
  listaPrecio: number;

  @Column({ type: 'varchar', length: 20, collation: 'utf8mb3_general_ci' })
  skuItem: string;

  @Column({ type: 'int' })
  precioBruto: number;

  @Column({ type: 'int' })
  descuento: number;

  @Column({ type: 'int' })
  precio: number;

  @Column({ type: 'int' })
  unidad: number;

  @Column({ type: 'int' })
  stockActual: number;

  @Column({ type: 'varchar', length: 20, collation: 'utf8mb3_general_ci' })
  promocion: string;

  @Column({ type: 'smallint' })
  estadoPuntoVenta: number;

  @Column({ type: 'varchar', length: 10, collation: 'utf8mb3_general_ci' })
  itemControlado: string;

  @Column({ type: 'double', precision: 10, scale: 2 })
  comision: number;

  @Column({ type: 'tinyint' })
  activo: number;

  @Column({ type: 'datetime' })
  fechaCrea: Date;

  // @ManyToOne(() => PuntoVenta, (puntoVenta) => puntoVenta.itemsListaPrecio)
  // @JoinColumn({ name: 'listaPrecio' })
  // puntoVenta: PuntoVenta;

  @OneToMany(() => TcpcItems, (tcpcItems) => tcpcItems.itemsListaPrecio)
  itemsListaPrecio: TcpcItems[];
}
