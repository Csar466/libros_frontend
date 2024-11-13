import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LibroDocument = HydratedDocument<LibroModel>;
@Schema()
export class LibroModel {
  id?: number;
  @Prop()
  titulo: string;
  @Prop()
  tipo: string;
  @Prop()
  genero: string;
  @Prop()
  autores: string;
  @Prop()
  nacionalidad: string;
  @Prop()
  idioma: string;
  @Prop()
  anio: number;
  @Prop()
  precio: number;
}
export const LibroSchema = SchemaFactory.createForClass(LibroModel);
