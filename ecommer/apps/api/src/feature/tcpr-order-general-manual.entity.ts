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

@Entity('tcpr_ordengeneralmanual', { schema: 'integration' })
export class TcprOrderGeneralManual {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('bigint', { name: 'idMarca' })
  brandId: number;

  @Column('text', { name: 'idMarcaAgregador' })
  brandAggregatorId: string;

  @PrimaryColumn('bigint', { name: 'idAgregador' })
  aggregatorId: number;

  @PrimaryColumn('bigint', { name: 'idPunto' })
  pointId: number;

  @Column('text', { name: 'idOrdenNumero' })
  orderNumberId: string;

  @Column('text', { name: 'mensajeApi' })
  messageapi: string;

  @Column('text', { name: 'nombreCliente' })
  clientName: string;

  @Column('text', { name: 'empresa' })
  company: string;

  @Column('text', { name: 'identificacion' })
  typeOrder: string;

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
  discountvalue: number;

  @Column('double', { name: 'valorOrden' })
  valueOrder: number;

  @Column('double', { name: 'totalOrden' })
  totalOrder: number;

  @Column('double', { name: 'valorIngresaCli' })
  valueIngressCli: number;

  @PrimaryColumn('tinyint', { name: 'idEstadoOrden' })
  idStateOrder: number;

  @Column('text', { name: 'observaciones' })
  observations: string | null;

  @Column('bigint', { name: 'idUsuario' })
  userId: string;

  @Column('datetime', { name: 'fechaOrden' })
  dateOrder: Date;

  @Column('datetime', { name: 'fechaCrea' })
  dateCreation: Date;
}
