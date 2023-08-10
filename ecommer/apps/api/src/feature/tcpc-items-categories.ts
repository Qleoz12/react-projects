import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TcprPointSale } from './tcpr-point-sale.entity';
import { ItemsListaPrecio } from './tcpr_itemslistaprecio';
import { TcpcItems } from './tcpc-items.entity';
import { TcprCategoriasListaPrecio } from './tcpr_categorias-listaprecio';

@Entity('tcpc_itemscategorias', { schema: 'integration' })
export class TcpcItemsCategories {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idCategoria' })
  categoryId: number;

  @Column('text', { name: 'nombre' })
  name: string;

  @Column('int', { name: 'orden' })
  order: number;

  @Column('bigint', { name: 'idMarca' })
  brandId: string;

  @Column('smallint', { name: 'imagen' })
  image: number;

  @Column('datetime', { name: 'fechaCrea' })
  dateCreate: Date;

  @Column('tinyint', { name: 'activo' })
  active: number;

  @Column('datetime', { name: 'fechaInactivo' })
  dateInactive: Date;

  @OneToMany(
    () => TcprCategoriasListaPrecio,
    (tcprCategoriasListaPrecios) => tcprCategoriasListaPrecios.categories,
  )
  tcprCategoriasListaPrecios: TcprCategoriasListaPrecio[];

  // @ManyToOne(
  //   () => TcpcAgregadores,
  //   (tcpcAgregadores) => tcpcAgregadores.tcpcItemscategorias,
  //   { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
  // )
  // @JoinColumn([{ name: 'idMarca', referencedColumnName: 'idAgregador' }])
  // idMarca2: TcpcAgregadores;

  // @ManyToMany(() => TcprPointSale, {
  //   onDelete: 'NO ACTION',
  //   onUpdate: 'NO ACTION',
  // })
  // @JoinTable({
  //   name: 'tcpr_categoriaslistaprecio',
  //   joinColumn: {
  //     name: 'idCategoria', //las relaciones van con underscore
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'listaPrecio',
  //     referencedColumnName: 'id',
  //   },
  // })
  // courses?: Course[];
}
