import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TcpcBrand } from './tcpc-brand.entity';

@Entity('tcpc_puntoventa', { schema: 'integration' })
export class TcprPointSale {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idPunto' })
  pointId: number;

  @Column('bigint', { name: 'idMultiPunto' })
  multiPointId: number;

  @Column('text', { name: 'idPuntoAgregador' })
  pointAggregatorId: string | null;

  @ManyToOne(() => TcpcBrand, { eager: true })
  @JoinColumn({ name: 'idMarca' })
  brand: TcpcBrand;

  @Column('text', { name: 'nombre' })
  name: string;

  @Column('varchar', { name: 'telefonoFijo' })
  landline: string;

  @Column('varchar', { name: 'telefonoCelular' })
  cellPhone: string;

  @Column('bigint', { name: 'idPais' })
  countryId: number;

  @Column('bigint', { name: 'idDepartamento' })
  departmentId: number;

  @Column('bigint', { name: 'idCiudad' })
  cityId: number;

  @Column('text', { name: 'direccion' })
  address: string;

  @Column('text', { name: 'email' })
  email: string;

  @Column('text', { name: 'folder' })
  folder: string;

  @Column('int', { name: 'cobertura' })
  coverage: number;

  @Column('text', { name: 'imgLogo' })
  imgLogo: string;

  @Column('text', { name: 'imgCabezote' })
  imgCabezote: string;

  @Column('varchar', { name: 'cajaNumero' })
  boxNumber: string;

  @Column('text', { name: 'horarioAtencion' })
  hoursAttention: string;

  @Column('double', { name: 'pedidoMinimo' })
  minimumOrder: number;

  @Column('double', { name: 'pedidoMaximo' })
  maxOrder: number;

  @Column('double', { name: 'costoEnvio' })
  shippingCost: number;

  @Column('tinyint', { name: 'envioVariable' })
  sendVariable: number;

  @Column('int', { name: 'listaPrecio' })
  listPrice: number;

  @Column('text', { name: 'latlng' })
  latlng: string;

  @Column('date', { name: 'fechaResolucion' })
  closeResolution: string;

  @Column('text', { name: 'resolucionDian' })
  resolutionDian: string;

  @Column('text', { name: 'prefijoFactura' })
  prefixInvoice: string;

  @Column('bigint', { name: 'facturaInicial' })
  facturaInitial: number;

  @Column('bigint', { name: 'facturaFinal' })
  facturaFinal: number;

  @Column('bigint', { name: 'facturaConsecutivo' })
  consecutiveInvoice: number;

  @Column('bigint', { name: 'numeroAlarmaFactura' })
  invoiceAlarmNumber: number;

  @Column('datetime', { name: 'fechaAlarmaResolucion' })
  date: Date;

  @Column('tinyint', { name: 'imprimeFacturaAuto' })
  printInvoiceAuto: number;

  @Column('bigint', { name: 'idOrdenDia' })
  orderDayId: number;

  @Column('bigint', { name: 'idLogistica' })
  logisticsId: number;

  @Column('text', { name: 'tiempocancelacion' })
  cancellationtime: string;

  @Column('datetime', { name: 'fechaOrdenDia' })
  dateOrderDay: Date;

  @Column('text', { name: 'unixTimeOrden' })
  unixTimeOrder: string;

  @Column('tinyint', { name: 'activo' })
  asset: number;

  @Column('datetime', { name: 'fechaInactivo' })
  dateInactive: Date;
}
