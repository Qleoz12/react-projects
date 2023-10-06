import { IsNumber, IsOptional, IsString } from 'class-validator';

export class TcprOrderDetailDto {
  @IsOptional()
  @IsNumber()
  customerId: number;

  @IsOptional()
  @IsNumber()
  pointId: number;

  @IsOptional()
  @IsNumber()
  multiPointId: number;

  @IsOptional()
  @IsNumber()
  orderGeneralId: number;

  @IsOptional()
  @IsString()
  orderNumberId: string;

  @IsOptional()
  @IsString()
  skuItemId: string;

  @IsOptional()
  @IsNumber()
  idSkuItem: number;

  @IsOptional()
  @IsString()
  skuItem: string;

  @IsOptional()
  @IsString()
  itemName: string;

  @IsOptional()
  @IsString()
  itemType: string;

  @IsOptional()
  @IsString()
  skuItemPrincipal: string;

  @IsOptional()
  @IsNumber()
  valueBaseUni: number;

  @IsOptional()
  @IsNumber()
  valueUnitary: number;

  @IsOptional()
  @IsNumber()
  percentageDiscount: number;

  @IsOptional()
  @IsNumber()
  discountvalue: number;

  @IsOptional()
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsNumber()
  valueBaseTotal: number;

  @IsOptional()
  @IsNumber()
  valueTotal: number;

  @IsOptional()
  @IsString()
  observation: string;

  @IsOptional()
  dateCreation: Date;
}
