import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TcprPointSale } from './tcpr-point-sale.entity';
import { ItemsListaPrecio } from './tcpr_itemslistaprecio';
import { TcpcItemsCategories } from './tcpc-items-categories';
/**
 * ESTa clase no deberia exisitir solo ser utilizada como parte de una relacion MANYTOMANY
 * debido a la baja relacion o normalizacion de las tablas se crea esta entidad como
 * simple join de consultas por lista de precio
 */
@Entity('tcpr_categoriaslistaprecio', { schema: 'integration' })
export class TcprCategoriasListaPrecio {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'listaPrecio' })
  listaPrecio: number;

  @Column('int', { name: 'idCategoria' })
  idCategoria: number;

  @ManyToOne(
    () => TcpcItemsCategories,
    (tcpcItemsCategories) => tcpcItemsCategories.tcprCategoriasListaPrecios,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'idCategoria', referencedColumnName: 'categoryId' }])
  categories: TcpcItemsCategories;
}
