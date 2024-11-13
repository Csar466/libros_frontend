import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibroModel, LibroSchema } from './dto/libro.model';
import { libroController } from './libro.controller';
import { libroService } from './libro.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: LibroModel.name, schema: LibroSchema }]),
  ],
  controllers: [libroController],
  providers: [libroService],
})
export class libroModule {}
