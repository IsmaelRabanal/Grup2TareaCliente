import { IsString, IsNotEmpty } from 'class-validator';

export class UpsertTareaDto {

  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  contenido: string;

  @IsNotEmpty()
  completada: boolean;
}