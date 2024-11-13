import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, Length } from 'class-validator';

export class LibroEntrada {
  @ApiProperty()
  @Length(1, 30, { message: 'el titulo debe ser entre 1 y 30 caracteres' })
  titulo: string;
  @ApiProperty()
  tipo: string;
  @ApiProperty()
  genero: string;
  @ApiProperty()
  autores: string;
  @ApiProperty()
  nacionalidad: string;
  @ApiProperty()
  idioma: string;
  @ApiProperty()
  anio: number;
  @ApiProperty()
  precio: number;
}
export class LibroActualizarEntrada {
  @Length(1, 30, { message: 'el titulo debe ser entre 1 y 30 caracteres' })
  @IsOptional()
  @ApiProperty()
  titulo?: string;

  @ApiProperty()
  @IsOptional()
  tipo?: string;

  @ApiProperty()
  @IsOptional()
  genero?: string;
  @ApiProperty()
  @IsOptional()
  nacionalidad: string;
  @ApiProperty()
  @IsOptional()
  anio: number;
  @ApiProperty()
  @IsOptional()
  precio: number;
}
