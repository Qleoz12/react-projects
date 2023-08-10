import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TcpcBrand } from './tcpc-brand.entity';
import { TcpcItemsCategories } from './tcpc-items-categories';
import { ItemsListaPrecio } from './tcpr_itemslistaprecio';

@Entity({ name: 'tcpc_items', schema: 'integration' })
export class TcpcItems {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idItem' })
  itemId: number;

  @Column('varchar', { name: 'skuItem', length: 20 })
  skuItem: string;

  @Column('text', { name: 'itemNombre' })
  itemName: string;

  @Column('text', { name: 'descripcion' })
  description: string;

  @ManyToOne(() => TcpcItemsCategories, { eager: true })
  @JoinColumn({ name: 'idCategoria', referencedColumnName: 'categoryId' })
  categoryId: number;

  @ManyToOne(() => TcpcBrand, { eager: true })
  @JoinColumn({ name: 'idMarca', referencedColumnName: 'brandId' })
  brandId: number;

  @Column('double', { name: 'impuesto' })
  tax: number;

  @Column('text', { name: 'imagen' })
  image: string;

  // @Column('int', { name: 'idUtensilio' })
  // idTool: number;

  @Column('int', { name: 'cantidadUtensilio' })
  quantityUtensil: number;

  @Column('int', { name: 'puntosRedencion' })
  redemptionPoints: number;

  @Column('varchar', { name: 'idHomologacion' })
  idHomologation: string;

  @Column('varchar', { name: 'idFamilia' })
  idFamily: string;

  @Column('datetime', { name: 'fechaCrea' })
  dateCreation: Date;

  @Column('tinyint', { name: 'activo' })
  asset: number;

  @Column('datetime', { name: 'fechaInactivo' })
  dateInactive: Date;

  @ManyToOne(
    () => ItemsListaPrecio,
    (itemsListaPrecio) => itemsListaPrecio.itemsListaPrecio,
  )
  @JoinColumn({ name: 'skuItem', referencedColumnName: 'skuItem' })
  itemsListaPrecio: ItemsListaPrecio;
}
