import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tcpr_cliente', { schema: 'integration' })
export class TcprClient {
  @PrimaryGeneratedColumn({ name: 'idCliente' })
  customerId: number;

  @Column('text', { name: 'idAgregadorInternal' })
  agregadorInternalId: string;

  @Column('text', { name: 'nombre' })
  name: string;

  @Column('int', { name: 'idTipoDoc' })
  typeDocId: number;

  @Column('text', { name: 'identificacion' })
  identification: string;

  @Column('varchar', { name: 'telefonoFijo', length: 20 })
  landline: string;

  @Column('varchar', { name: 'telefonoFijo2' })
  landline2: string;

  @Column('varchar', { name: 'telefonoFijo3' })
  landline3: string;

  @Column('varchar', { name: 'telefonoFijo4' })
  landline4: string;

  @Column('varchar', { name: 'telefonoCelular' })
  cellPhone: string;

  @Column('varchar', { name: 'Extension', length: 8 })
  extension: string;

  @Column('varchar', { name: 'Extension2', length: 8 })
  extension2: string;

  @Column('varchar', { name: 'Extension3', length: 8 })
  extension3: string;

  @Column('varchar', { name: 'Extension4', length: 8 })
  extension4: string;

  @Column('text', { name: 'empresa' })
  company: string;

  @Column('text', { name: 'nit' })
  nit: string;

  @Column('text', { name: 'direccion', nullable: true })
  address: string | null;

  @Column('text', { name: 'email' })
  email: string;

  @Column('text', { name: 'barrio' })
  neighborhood: string;

  @Column('text', { name: 'web' })
  web: string | null;

  @Column('bigint', { name: 'idPais' })
  countryId: number;

  @Column('bigint', { name: 'idDepartamento' })
  departmentId: number;

  @Column('bigint', { name: 'idCiudad' })
  cityId: number;

  @Column('text', { name: 'observaciones' })
  observations: string | null;

  @Column('smallint', { name: 'habeasDataCustodia' })
  habeasDataCustodia: number;

  @Column('smallint', { name: 'habeasDataEnvio' })
  habeasDateShipping: number;

  @Column('datetime', { name: 'fechaCrea' })
  dateCreation: Date;
}
