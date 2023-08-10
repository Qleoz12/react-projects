import { IsNotEmpty, IsOptional, IsNumber, IsString } from 'class-validator';
export class TcprOrderGeneralManualDto {
  @IsOptional()
  @IsNumber()
  brandId: number;

  @IsOptional()
  @IsString()
  brandAggregatorId: string;

  @IsOptional()
  @IsNumber()
  aggregatorId: number;

  @IsOptional()
  @IsNumber()
  pointId: number;

  @IsOptional()
  @IsString()
  orderNumberId: string;

  @IsOptional()
  @IsString()
  messageapi: string;

  @IsOptional()
  @IsString()
  clientName: string;

  @IsOptional()
  @IsString()
  company: string;

  @IsOptional()
  @IsString()
  typeOrder: string;

  @IsOptional()
  @IsString()
  landline: string;

  @IsOptional()
  @IsString()
  cellPhone: string;

  @IsOptional()
  @IsNumber()
  cityId: number;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  neighborhood: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  years: string | null;

  @IsOptional()
  @IsString()
  lng: string | null;

  @IsOptional()
  @IsString()
  nomTypeDelivery: string | null;

  @IsOptional()
  @IsNumber()
  valueItems: number;

  @IsOptional()
  @IsNumber()
  valueDomicile: number;

  @IsOptional()
  @IsNumber()
  valuable: number;

  @IsOptional()
  @IsNumber()
  valueBaseItems: number;

  @IsOptional()
  @IsNumber()
  valueBaseTotalOrder: number;

  @IsOptional()
  @IsNumber()
  discountvalue: number;

  @IsOptional()
  @IsNumber()
  valueOrder: number;

  @IsOptional()
  @IsNumber()
  totalOrder: number;

  @IsOptional()
  @IsNumber()
  valueIngressCli: number;

  @IsOptional()
  @IsNumber()
  idStateOrder: number;

  @IsOptional()
  @IsString()
  observations: string | null;

  @IsOptional()
  @IsString()
  userId: string;

  @IsOptional()
  dateOrder: Date;

  @IsOptional()
  dateCreation: Date;
}
