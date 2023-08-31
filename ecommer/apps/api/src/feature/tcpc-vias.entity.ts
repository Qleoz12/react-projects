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

@Entity({ name: 'tcpc_vias', schema: 'integration' })
export class TcpcVias {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idVia' })
  id: number;

  @Column('text', { name: 'nombre' })
  name: string;

  @Column('bigint', { name: 'idDepartamento' })
  idDepartamento: number;

  @Column('int', { name: 'activo' })
  activo: number;
}
