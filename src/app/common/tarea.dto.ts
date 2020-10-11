import { IsString, IsNotEmpty } from 'class-validator';

export class TareaDto {

  @IsNotEmpty()
  @IsString()
  _id: string;

  @IsNotEmpty()
  @IsString()
  contenido: string;

  @IsNotEmpty()
  completada: boolean;
}