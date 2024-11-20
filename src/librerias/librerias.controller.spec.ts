import { Test, TestingModule } from '@nestjs/testing';
import { LibreriasController } from './librerias.controller';
import { LibreriasService } from './librerias.service';

describe('LibreriasController', () => {
  let controller: LibreriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibreriasController],
      providers: [LibreriasService],
    }).compile();

    controller = module.get<LibreriasController>(LibreriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
