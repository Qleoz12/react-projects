import { IsNumber, IsOptional, IsString } from 'class-validator';

export class TcprOrderTypePaymentDto {
  @IsOptional()
  @IsNumber()
  pointid: number;

  @IsOptional()
  @IsNumber()
  orderGeneralId: number;

  @IsOptional()
  @IsString()
  orderNumberId: string;

  @IsOptional()
  @IsNumber()
  typePayId: number;

  @IsOptional()
  nomTypePay: string;

  @IsOptional()
  @IsNumber()
  value: number;

  @IsOptional()
  dateCreation: Date;
}
