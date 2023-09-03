import { IsNumber, IsNotEmpty } from 'class-validator';
export class TcpCreaidordengeneral {
  @IsNotEmpty()
  @IsNumber()
  idPunto: number;
}
