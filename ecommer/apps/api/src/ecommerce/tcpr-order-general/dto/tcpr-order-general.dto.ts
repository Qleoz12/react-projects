import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsDate,
} from 'class-validator';
export class TcprOrderGeneralDto {
  @IsNotEmpty()
  @IsNumber()
  customerId: number;

  @IsOptional()
  @IsNumber()
  brandId: number;

  @IsNotEmpty()
  @IsString()
  brandAggregatorId: string;

  @IsOptional()
  @IsNumber()
  aggregatorId: number;

  @IsOptional()
  @IsNumber()
  pointId: number;

  @IsOptional()
  @IsNumber()
  multiPointId: number;

  @IsOptional()
  @IsNumber()
  orderDayId: number;

  @IsOptional()
  @IsNumber()
  orderGeneralId: number;

  @IsOptional()
  @IsString()
  orderNumberId: string; //orderNumberId

  @IsNotEmpty()
  @IsString()
  clientName: string;

  @IsNotEmpty()
  @IsString()
  company: string;

  @IsNotEmpty()
  @IsString()
  identification: string;

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
  discountValue: number;

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
  typeSaleId: number;

  @IsOptional()
  @IsNumber()
  stateOrderId: number;

  @IsOptional()
  @IsNumber()
  statePosId: number;

  @IsOptional()
  @IsString()
  couponId: string;

  @IsOptional()
  @IsString()
  nameCoupon: string;

  @IsOptional()
  @IsNumber()
  impression: number;

  @IsOptional()
  @IsNumber()
  impresionLogistics: number;

  @IsOptional()
  @IsNumber()
  logisticsId: number;

  @IsOptional()
  @IsNumber()
  domiciliaryId: number;

  @IsOptional()
  @IsString()
  bill: string | null;

  @IsOptional()
  @IsString()
  observations: string | null;

  @IsOptional()
  @IsNumber()
  userId: number;

  @IsOptional()
  @IsNumber()
  cancelUserId: number;

  @IsOptional()
  @IsDate()
  dateState: Date;

  @IsOptional()
  @IsDate()
  dateInvoice: Date;

  @IsOptional()
  @IsDate()
  dateOrder: Date;

  @IsOptional()
  @IsDate()
  dateCreation: Date;
}
