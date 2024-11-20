import { Injectable } from '@nestjs/common';
import { CreateLibreriaDto } from './dto/create-libreria.dto';
import { UpdateLibreriaDto } from './dto/update-libreria.dto';

@Injectable()
export class LibreriasService {
  create(createLibreriaDto: CreateLibreriaDto) {
    return 'This action adds a new libreria';
  }

  findAll() {
    return `This action returns all librerias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libreria`;
  }

  update(id: number, updateLibreriaDto: UpdateLibreriaDto) {
    return `This action updates a #${id} libreria`;
  }

  remove(id: number) {
    return `This action removes a #${id} libreria`;
  }
}
