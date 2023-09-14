import {
  IsOptional,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDate,
} from 'class-validator';

export class TcprDescuentosRedimirDto {
  @IsNumber()
  id: number;
}
