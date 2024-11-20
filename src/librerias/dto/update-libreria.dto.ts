import { PartialType } from '@nestjs/swagger';
import { CreateLibreriaDto } from './create-libreria.dto';

export class UpdateLibreriaDto extends PartialType(CreateLibreriaDto) {}
