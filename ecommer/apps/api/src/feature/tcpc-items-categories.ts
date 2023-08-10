import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  // @OneToMany(() => TcpcItems, (tcpcItems) => tcpcItems.idCategoria2)
  // tcpcItems: TcpcItems[];

  // @ManyToOne(
  //   () => TcpcAgregadores,
  //   (tcpcAgregadores) => tcpcAgregadores.tcpcItemscategorias,
  //   { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
  // )
  // @JoinColumn([{ name: 'idMarca', referencedColumnName: 'idAgregador' }])
  // idMarca2: TcpcAgregadores;
}
