import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from 'typeorm';
import { TcprClient } from './tcpr-client.entity';
import { TcprOrderDetail } from './tcpr-order-detail.entity';
import { TcpcLoginUsers } from './tcpc-login-users.entity';

@Entity('tcpr_trazas', { schema: 'integration' })
export class TcprTrazas {
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
  @JoinColumn({
    name: 'idUsuarioTraslado',
    referencedColumnName: 'userId',
  })
  userTransfer: TcpcLoginUsers;

  @ManyToOne(() => TcpcLoginUsers, { eager: true })
  @JoinColumn({
    name: 'idUsuarioCancela',
    referencedColumnName: 'userId',
  })
  userCancel: TcpcLoginUsers;

  @Column('datetime', { name: 'fechaInicio' })
  dateStart: Date;

  @Column('datetime', { name: 'fechaFin' })
  dateFin: Date;

  @Column('datetime', { name: 'fechaTraslado' })
  closeTransfer: Date;

  @Column('datetime', { name: 'fechaCancela' })
  closeCancel: Date;
}
