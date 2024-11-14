import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { libroService } from './libro.service';
import { LibroActualizarEntrada, LibroEntrada } from './dto/libro.input.dto';
//import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Libros')
@Controller()
export class libroController {
  constructor(private readonly libro: libroService) {}
  //@ApiBearerAuth()
  // @UseGuards(AuthGuard)
  @Post('Crear_registro_libro')
  crear(@Body() body: LibroEntrada) {
    return this.libro.crear(body);
  }
  @Get('Listar_ID_libro/:id')
  detalleLibro(@Param('id') idLibro: string) {
    return this.libro.idLibro(idLibro);
  }
  @Patch('actualizar_ID_libro/:id')
  actualizar(
    @Param('id') idLibro: string,
    @Body() body: LibroActualizarEntrada,
  ) {
    // captura el valor desde la url
    return this.libro.actualizar(idLibro, body);
  }
  @Delete('Borrar_ID_Libro/:id')
  borrar(@Param('id') libroAeliminar: string) {
    return this.libro.eliminar(libroAeliminar);
  }
}
