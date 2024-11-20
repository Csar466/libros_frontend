import { Test, TestingModule } from '@nestjs/testing';
import { LibreriasService } from './librerias.service';

describe('LibreriasService', () => {
  let service: LibreriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibreriasService],
    }).compile();

    service = module.get<LibreriasService>(LibreriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
