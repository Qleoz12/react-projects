import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  OneToMany,
} from 'typeorm';
import { TcprOrderGeneral } from './tcpr-order-general.entity';
import { TcprClient } from './tcpr-client.entity';
import { TcpcLoginUsers } from './tcpc-login-users.entity';
import { TcprOrderDetail } from './tcpr-order-detail.entity';

@Entity('tcpr_trazasdia', { schema: 'integration' })
export class TcprTrazasdia {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @ManyToOne(() => TcprClient, { eager: true })
  @JoinColumn({ name: 'idCliente', referencedColumnName: 'customerId' })
  customer: TcprClient;

  @PrimaryColumn('bigint', { name: 'idPunto' })
  pointId: number;

  @Column('bigint', { name: 'idPuntoOrigen' })
  pointOriginId: number;

  @PrimaryColumn({ name: 'idOrdenGeneral' })
  orderGeneralId: number;

  @Column('int', { name: 'idTraza' })
  trazaId: number;

  @PrimaryColumn('int', { name: 'idIncidente' })
  incidentId: number;

  @Column('text', { name: 'observaciones' })
  observations: string;

  @Column('bigint', { name: 'idDomiciliario' })
  domiciliaryId: number;

  @ManyToOne(() => TcpcLoginUsers, { eager: true })
  @JoinColumn({ name: 'idUsuario', referencedColumnName: 'userId' })
  user: TcpcLoginUsers;

  @ManyToOne(() => TcpcLoginUsers, { eager: true })
  @JoinColumn({ name: 'idUsuarioTraslado', referencedColumnName: 'userId' })
  userTransfer: TcpcLoginUsers;

  @ManyToOne(() => TcpcLoginUsers, { eager: true })
  @JoinColumn({ name: 'idUsuarioCancela', referencedColumnName: 'userId' })
  userCancel: TcpcLoginUsers;

  @Column('datetime', { name: 'fechaInicio' })
  dateStart: Date;

  @Column('datetime', { name: 'fechaFin' })
  dateFin: Date;

  @Column('datetime', { name: 'fechaTraslado' })
  dateTransfer: Date;

  @Column('datetime', { name: 'fechaCancela' })
  dateCancel: Date;
}
