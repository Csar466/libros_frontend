import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { blue } from 'chalk';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await app.listen(3000);
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('LIBROS')
    .setDescription('Descripcion de API de libros')
    .setVersion('1.0')
    .addTag('Libros')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //app.useGlobalPipes(new ValidationPipe());
  // const user = configService.get<string>('database.user');
  // ?? , ||
  const port = configService.get('port') ?? 3001;
  await app
    .listen(port)
    .then(() => console.info(blue.bold(`Server running on port ${port}`)));
}
bootstrap();
