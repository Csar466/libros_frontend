import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LibroModel } from './dto/libro.model';
import { LibroActualizarEntrada, LibroEntrada } from './dto/libro.input.dto';

@Injectable()
export class libroService {
  constructor(
    @InjectModel(LibroModel.name) private libroCollection: Model<LibroModel>,
    private readonly configservice: ConfigService,
  ) {}
  listaLibros = [];
  async crear(body: LibroEntrada): Promise<LibroModel> {
    const libroACrear = new this.libroCollection({
      titulo: body.titulo,
      tipo: body.tipo,
      genero: body.genero,
      autores: body.autores,
      nacionalidad: body.nacionalidad,
      idioma: body.titulo,
      anio: body.anio,
      precio: body.precio,
    });
    const libroCreado = await libroACrear.save(); // linea q almacena en la db
    return libroCreado;
    //return libroACrear;
  }
  async idLibro(id: string) {
    const libroEncontrado = await this.libroCollection.findById(id);
    if (libroEncontrado === null) {
      throw new NotFoundException('Libro no encontrado');
    }
    return libroEncontrado;
  }
  async actualizar(id: string, body: LibroActualizarEntrada) {
    const libroEncontrado = await this.libroCollection.findById(id);

    if (libroEncontrado === null) {
      throw new NotFoundException('Libro no encontrado');
    }
    libroEncontrado.titulo = body.titulo ?? undefined;
    libroEncontrado.tipo = body.tipo ?? undefined;
    libroEncontrado.genero = body.genero ?? undefined;
    libroEncontrado.autores = body.titulo;
    libroEncontrado.nacionalidad = body.nacionalidad;
    libroEncontrado.idioma = body.titulo;
    libroEncontrado.anio = body.anio;
    libroEncontrado.precio = body.precio;
    const libroGuardado = await libroEncontrado.save();
    return libroGuardado;
  }
  async eliminar(libroId: string) {
    const libroEncontrado = await this.libroCollection.findOne({
      _id: libroId,
    });

    if (libroEncontrado === null) {
      return `El libro ${libroId} no se encontro en la lista`;
    } else {
      await this.libroCollection.deleteOne({ _id: libroId });
      return {
        libro: libroEncontrado.titulo,
        mensaje: `El libro ${libroId} fue eliminado`,
      };
    }
  }
}
