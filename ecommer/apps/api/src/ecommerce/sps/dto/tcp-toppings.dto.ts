import {
  IsOptional,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDate,
} from 'class-validator';
export class TcpToppings {
  @IsNotEmpty()
  @IsNumber()
  idPunto: number;
  @IsNotEmpty()
  @IsNumber()
  skuItem: number;
}
