import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PedidoService } from '../services/pedido.service';

@Controller('pedidos')
export class PedidoController {
   constructor(private readonly pedidoService: PedidoService) { }

   @Post()
   create(@Body() data: any) {
      return this.pedidoService.create(data);
   }

   @Get()
   findAll() {
      return this.pedidoService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: number) {
      return this.pedidoService.findOne(Number(id));
   }

   @Put(':id')
   update(@Param('id') id: number, @Body() data: any) {
      return this.pedidoService.update(Number(id), data);
   }

   @Delete(':id')
   remove(@Param('id') id: number) {
      return this.pedidoService.remove(Number(id));
   }
}
