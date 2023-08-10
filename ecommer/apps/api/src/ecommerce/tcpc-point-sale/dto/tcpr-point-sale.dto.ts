import { IsOptional, IsNumber, IsString, IsNotEmpty } from 'class-validator';
export class TcprPointSaleDto {
  @IsOptional()
  @IsNumber()
  multiPointId: number;

  @IsOptional()
  @IsString()
  pointAggregatorId: string | null;

  @IsNotEmpty()
  @IsNumber()
  brandId: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  landline: string;

  @IsOptional()
  @IsString()
  cellPhone: string;

  @IsOptional()
  @IsNumber()
  countryId: number;

  @IsOptional()
  @IsNumber()
  departmentId: number;

  @IsOptional()
  @IsNumber()
  cityId: number;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  folder: string;

  @IsOptional()
  @IsNumber()
  coverage: number;

  @IsNotEmpty()
  @IsString()
  boxNumber: string;

  @IsNotEmpty()
  @IsString()
  hoursAttention: string;

  @IsOptional()
  @IsNumber()
  minimumOrder: number;

  @IsOptional()
  @IsNumber()
  maxOrder: number;

  @IsOptional()
  @IsNumber()
  shippingCost: number;

  @IsOptional()
  @IsNumber()
  sendVariable: number;

  @IsOptional()
  @IsNumber()
  listPrice: number;

  @IsNotEmpty()
  @IsString()
  latlng: string;

  @IsOptional()
  @IsString()
  closeResolution: string;

  @IsNotEmpty()
  @IsString()
  resolutionDian: string;

  @IsNotEmpty()
  @IsString()
  prefixInvoice: string;

  @IsOptional()
  @IsNumber()
  facturaInitial: number;

  @IsOptional()
  @IsNumber()
  facturaFinal: number;

  @IsOptional()
  @IsNumber()
  consecutiveInvoice: number;

  @IsOptional()
  @IsNumber()
  invoiceAlarmNumber: number;

  @IsOptional()
  date: Date;

  @IsOptional()
  @IsNumber()
  printInvoiceAuto: number;

  @IsOptional()
  @IsNumber()
  orderDayId: number;

  @IsOptional()
  @IsNumber()
  logisticsId: number;

  @IsNotEmpty()
  @IsString()
  cancellationtime: string;

  @IsOptional()
  dateOrderDay: Date;

  @IsNotEmpty()
  @IsString()
  unixTimeOrder: string;

  @IsOptional()
  @IsNumber()
  asset: number;

  @IsOptional()
  dateInactive: Date;
}
