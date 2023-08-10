import { IsOptional, IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class TcprClientDto {
  @IsNotEmpty()
  @IsString()
  agregadorInternalId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  typeDocId: number;

  @IsNotEmpty()
  @IsString()
  identification: string;

  @IsOptional()
  @IsString()
  landline: string;

  @IsOptional()
  @IsString()
  landline2: string;

  @IsOptional()
  @IsString()
  landline3: string;

  @IsOptional()
  @IsString()
  landline4: string;

  @IsOptional()
  @IsString()
  cellPhone: string;

  @IsOptional()
  @IsString()
  extension: string;

  @IsOptional()
  @IsString()
  extension2: string;

  @IsOptional()
  @IsString()
  extension3: string;

  @IsOptional()
  @IsString()
  extension4: string;

  @IsNotEmpty()
  @IsString()
  company: string;

  @IsNotEmpty()
  @IsString()
  nit: string;

  @IsOptional()
  @IsString()
  address: string | null;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @IsOptional()
  @IsString()
  web: string | null;

  @IsOptional()
  @IsNumber()
  countryId: number;

  @IsOptional()
  @IsNumber()
  departmentId: number;

  @IsOptional()
  @IsNumber()
  cityId: number;

  @IsOptional()
  @IsString()
  observations: string | null;

  @IsOptional()
  @IsNumber()
  habeasDataCustodia: number;

  @IsOptional()
  @IsNumber()
  habeasDateShipping: number;

  @IsOptional()
  dateCreation: Date;
}
