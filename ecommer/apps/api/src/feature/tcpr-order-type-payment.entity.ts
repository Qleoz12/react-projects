import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity('tcpr_ordentipopago', { schema: 'integration' })
export class TcprOrderTypePayment {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @PrimaryColumn('bigint', { name: 'idPunto' })
  pointid: number;

  @Column('bigint', { name: 'idOrdenGeneral' })
  orderGeneralId: number;

  @Column('text', { name: 'idOrdenNumero' })
  orderNumberId: string;

  @PrimaryColumn('int', { name: 'idTipoPago' })
  typePayId: number;

  @Column('text', { name: 'NomTipoPago' })
  nomTypePay: string;

  @Column('double', { name: 'valor' })
  value: number;

  @Column('datetime', { name: 'fechaCrea' })
  dateCreation: Date;
}
