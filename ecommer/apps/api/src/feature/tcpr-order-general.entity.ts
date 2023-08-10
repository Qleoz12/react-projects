import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TcprClient } from './tcpr-client.entity';
import { TcpcLoginUsers } from './tcpc-login-users.entity';

@Entity('tcpr_ordengeneral', { schema: 'integration' })
export class TcprOrderGeneral {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @ManyToOne(() => TcprClient, { eager: true })
  @JoinColumn({ name: 'idCliente', foreignKeyConstraintName: 'customerId' })
  customer: TcprClient;

  @Column('bigint', { name: 'idMarca' })
  brandId: number;

  @Column('text', { name: 'idMarcaAgregador' })
  brandAggregatorId: string;

  @PrimaryColumn('bigint', { name: 'idAgregador' })
  aggregatorId: number;

  @PrimaryColumn('bigint', { name: 'idPunto' })
  pointId: number;

  @PrimaryColumn('bigint', { name: 'idMultiPunto' })
  multiPointId: number;

  @Column('bigint', { name: 'idOrdenDia' })
  orderDayId: number;

  @Column('bigint', { name: 'idOrdenGeneral' })
  orderGeneralId: number;

  @Column('text', { name: 'idOrdenNumero' })
  orderNumberId: string;

  @Column('text', { name: 'nombreCliente' })
  clientName: string;

  @Column('text', { name: 'empresa' })
  company: string;

  @Column('text', { name: 'identificacion' })
  identification: string;

  @Column('varchar', { name: 'telefonoFijo' })
  landline: string;

  @Column('varchar', { name: 'telefonoCelular' })
  cellPhone: string;

  @Column('bigint', { name: 'idCiudad' })
  cityId: number;

  @Column('text', { name: 'direccion' })
  address: string;

  @Column('text', { name: 'barrio' })
  neighborhood: string;

  @Column('text', { name: 'email' })
  email: string;

  @Column('text', { name: 'lat' })
  years: string | null;

  @Column('text', { name: 'lng' })
  lng: string | null;

  @Column('varchar', { name: 'nomTipoEntrega' })
  nomTypeDelivery: string | null;

  @Column('double', { name: 'valorItems' })
  valueItems: number;

  @Column('double', { name: 'valorDomicilio' })
  valueDomicile: number;

  @Column('double', { name: 'valorPropina' })
  valuable: number;

  @Column('double', { name: 'valorBaseItems' })
  valueBaseItems: number;

  @Column('double', { name: 'valorBaseTotalOrden' })
  valueBaseTotalOrder: number;

  @Column('double', { name: 'valorDescuento' })
  discountValue: number;

  @Column('double', { name: 'valorOrden' })
  valueOrder: number;

  @Column('double', { name: 'totalOrden' })
  totalOrder: number;

  @Column('double', { name: 'valorIngresaCli' })
  valueIngressCli: number;

  @PrimaryColumn('tinyint', { name: 'idTipoVenta' })
  typeSaleId: number;

  @PrimaryColumn('tinyint', { name: 'idEstadoOrden' })
  stateOrderId: number;

  @PrimaryColumn('tinyint', { name: 'idEstadoPos' })
  statePosId: number;

  @Column('text', { name: 'idCupon', comment: 'Código del cupón' })
  couponId: string;

  @Column('text', { name: 'nombreCupon', comment: 'Nombre del cupón usado' })
  nameCoupon: string;

  @Column('tinyint', { name: 'impresion' })
  impression: number;

  @Column('tinyint', { name: 'impresionLogistica' })
  impresionLogistics: number;

  @Column('int', { name: 'idLogistica' })
  logisticsId: number;

  @Column('bigint', { name: 'idDomiciliario' })
  domiciliaryId: number;

  @Column('text', { name: 'factura', nullable: true })
  bill: string | null;

  @Column('text', { name: 'observaciones', nullable: true })
  observations: string | null;

  @ManyToOne(() => TcpcLoginUsers, { eager: true })
  @JoinColumn({
    name: 'idUsuario',
    referencedColumnName: 'userId',
  })
  user: TcpcLoginUsers;

  @ManyToOne(() => TcpcLoginUsers, { eager: true })
  @JoinColumn({ name: 'idUsuarioCancel', referencedColumnName: 'userId' })
  cancelUser: TcpcLoginUsers;

  @Column('datetime', { name: 'fechaEstado' })
  dateState: Date;

  @Column('datetime', { name: 'fechaFactura' })
  dateInvoice: Date;

  @Column('datetime', { name: 'fechaOrden' })
  dateOrder: Date;

  @Column('datetime', { name: 'fechaCrea' })
  dateCreation: Date;
}
