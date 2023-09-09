import {
  IsOptional,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDate,
} from 'class-validator';

export class TcprDescuentosDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNumber()
  idTipoDescuento: number;

  @IsOptional()
  @IsNumber()
  idOrdengeneral: number;

  @IsOptional()
  @IsString()
  skuItem: string;

  @IsOptional()
  @IsString()
  codigoDescuento: string;

  @IsOptional()
  @IsNumber()
  porcentaje: number;

  @IsOptional()
  @IsDate()
  fechaRedencion: Date;

  @IsOptional()
  @IsDate()
  fechaVencimiento: Date;

  @IsOptional()
  @IsDate()
  fechaCrea: Date;

  @IsOptional()
  @IsNumber()
  activo: number;
}
