import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tcpc_marca', { schema: 'integration' })
export class TcpcBrand {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idMarca', unsigned: true })
  brandId: number;

  @Column('text', { name: 'nombre' })
  name: string;

  @Column('bigint', { name: 'idOrdenGeneral' })
  orderGeneralId: number;

  @Column('text', { name: 'identificacion', nullable: true })
  identification: string | null;

  @Column('varchar', { name: 'telefonoFijo', length: 7 })
  phoneFijo: string;

  @Column('varchar', { name: 'telefonoCelular' })
  cellPhone: string;

  @Column('text', { name: 'direccion', nullable: true })
  address: string;

  @Column('text', { name: 'correo', nullable: true })
  email: string;

  @Column('datetime', { name: 'fechaCrea' })
  dateCreate: Date;

  @Column('tinyint', { name: 'activo' })
  active: boolean;

  // @OneToMany(() => TcpcPuntoventa, (tcpcPuntoventa) => tcpcPuntoventa.idMarca2)
  // tcpcPuntoventas: TcpcPuntoventa[];

  // @OneToMany(() => TcpcItems, (tcpcItems) => tcpcItems.idMarca2)
  // tcpcItems: TcpcItems[];

  // @OneToMany(() => TcprNovedades, (tcprNovedades) => tcprNovedades.idMarca2)
  // tcprNovedades: TcprNovedades[];
}
