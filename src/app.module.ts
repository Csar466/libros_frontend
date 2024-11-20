import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { libroModule } from './Libros/libro.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LibreriasModule } from './librerias/librerias.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    libroModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    LibreriasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
