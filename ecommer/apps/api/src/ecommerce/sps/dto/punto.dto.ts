import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsBoolean,
  IsMobilePhone,
  IsDateString,
} from 'class-validator';

export class PuntoDto {
  @IsNotEmpty()
  @IsString()
  idPunto: string;

  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsNotEmpty()
  @IsNumber()
  pedidoMinimo: number;

  @IsNotEmpty()
  @IsNumber()
  costoEnvio: number;

  @IsNotEmpty()
  @IsMobilePhone('es-ES') // Assuming you are working with Spanish phone numbers
  telefonoCelular: string;

  @IsNotEmpty()
  @IsDateString()
  horaInicio: string;

  @IsNotEmpty()
  @IsDateString()
  horaFin: string;

  @IsNotEmpty()
  @IsBoolean()
  dentro: boolean;
}
