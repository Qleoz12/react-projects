import {
  IsOptional,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDate,
} from 'class-validator';
export class TcpRestaurantsSpDto {
  @IsNotEmpty()
  @IsNumber()
  lat: number;
  @IsNotEmpty()
  @IsNumber()
  lng: number;
}
