import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('tcpc_loginusuarios', { schema: 'integration' })
export class TcpcLoginUsers {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idUsuario' })
  userId: number;

  @Column('text', { name: 'nombre' })
  name: string;

  @Column('text', { name: 'usuario' })
  user: string;

  @Column('text', { name: 'clave', comment: 'Campo encripto.', select: false })
  clue: string;

  @Column('text', { name: 'celular' })
  cellPhone: string;

  @Column('text', { name: 'identificacion' })
  identification: string;

  @Column('text', { name: 'tipoInicio' })
  typeStart: string;

  @PrimaryColumn('bigint', { name: 'idPais' })
  countryId: number;

  @PrimaryColumn('bigint', { name: 'idCiudad' })
  cityId: number;

  @Column('bigint', { name: 'idPunto' })
  pointId: number;

  @Column('bigint', { name: 'idPerfil' })
  profileId: number;

  @Column('text', { name: 'lat' })
  years: string;

  @Column('text', { name: 'lng' })
  lng: string;

  @Column('varchar', { name: 'apiGeoGoogle' })
  apiGeoGoogle: string;

  @Column('text', { name: 'keyGoogle' })
  keyGoogle: string;

  @Column('smallint', { name: 'tipoGeo' })
  typeGeo: number;

  @Column('tinyint', { name: 'cambioClave' })
  changekey: number;

  @Column('tinyint', { name: 'login' })
  login: boolean;

  @Column('tinyint', { name: 'suspenso' })
  suspended: boolean;

  @Column('tinyint', { name: 'progresivo' })
  progressive: boolean;

  @Column('tinyint', { name: 'idCdr' })
  cdrId: boolean;

  @Column('tinyint', { name: 'screenAuto' })
  screenAuto: boolean;

  @Column('tinyint', { name: 'grabar', width: 1 })
  gravedigger: boolean;

  @Column('smallint', { name: 'asesorWeb' })
  webAdvisor: number;

  @Column('datetime', { name: 'fechaUltimoIngreso' })
  dateLastEntry: Date;

  @Column('datetime', { name: 'fechaSalida' })
  departureDate: Date;

  @Column('datetime', { name: 'fechaLimiteIngreso' })
  dateLimitIncome: Date;

  @Column('tinyint', { name: 'activo' })
  asset: number;

  @Column('datetime', { name: 'fechaActivo' })
  dateActive: Date;

  @Column('datetime', { name: 'fechaCrea' })
  dateCreation: Date;
}
