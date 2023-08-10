import { IsString, IsNumber, IsOptional, MaxLength } from 'class-validator';
export class TcprOrderDetailManualDto {
  @IsOptional()
  @IsNumber()
  orderGeneralManualId: number;

  @IsOptional()
  @IsNumber()
  pointId: number;

  @IsOptional()
  @IsString()
  orderNumberId: string;

  @IsOptional()
  @IsString()
  skuItemIs: string;

  @IsOptional()
  @IsString()
  skuItem: string;

  @IsOptional()
  @IsString()
  itemName: string;

  @IsOptional()
  @IsString()
  @MaxLength(3)
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
