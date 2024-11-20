import { Module } from '@nestjs/common';
import { LibreriasService } from './librerias.service';
import { LibreriasController } from './librerias.controller';

@Module({
  controllers: [LibreriasController],
  providers: [LibreriasService],
})
export class LibreriasModule {}
