import {
  IsOptional,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDate,
  isString,
} from 'class-validator';

export class TcpcViasDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  idDepartamento: number;

  @IsNotEmpty()
  @IsNumber()
  activo: number;
}
