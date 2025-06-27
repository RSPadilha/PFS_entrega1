import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from 'src/models/cliente.entity';

@Controller('clientes')
export class ClienteController {
   constructor(private readonly clienteService: ClienteService) { }

   @Post()
   create(@Body() data: Cliente) {
      return this.clienteService.create(data);
   }

   @Get()
   findAll() {
      return this.clienteService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: number) {
      return this.clienteService.findOne(Number(id));
   }

   @Put(':id')
   update(@Param('id') id: number, @Body() data: any) {
      return this.clienteService.update(Number(id), data);
   }

   @Delete(':id')
   remove(@Param('id') id: number) {
      return this.clienteService.remove(Number(id));
   }
}
