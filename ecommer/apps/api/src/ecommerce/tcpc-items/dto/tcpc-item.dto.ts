import {
  IsOptional,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDate,
} from 'class-validator';

export class TcpcItemDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  skuItem: string;

  @IsNotEmpty()
  @IsString()
  itemName: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;

  @IsOptional()
  @IsNumber()
  brandId: number;

  @IsOptional()
  @IsNumber()
  tax: number;

  @IsOptional()
  @IsNumber()
  idTool: number;

  @IsOptional()
  @IsNumber()
  quantityUtensil: number;

  @IsOptional()
  @IsNumber()
  redemptionPoints: number;

  @IsOptional()
  @IsString()
  idHomologation: string;

  @IsOptional()
  @IsString()
  idFamily: string;

  // @IsOptional()
  // @IsDate()
  // dateCreation: Date;

  @IsOptional()
  @IsNumber()
  asset: number;

  @IsOptional()
  @IsDate()
  dateInactive: Date;

  @IsOptional()
  @IsNumber()
  price: number;
}
