import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { libroModule } from './Libros/libro.module';

@Module({
  imports: [libroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
