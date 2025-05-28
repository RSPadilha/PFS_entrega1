import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AtendenteService } from '../services/atendente.service';

@Controller('atendentes')
export class AtendenteController {
   constructor(private readonly atendenteService: AtendenteService) { }

   @Post()
   create(@Body() data: any) {
      return this.atendenteService.create(data);
   }

   @Get()
   findAll() {
      return this.atendenteService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: number) {
      return this.atendenteService.findOne(Number(id));
   }

   @Put(':id')
   update(@Param('id') id: number, @Body() data: any) {
      return this.atendenteService.update(Number(id), data);
   }

   @Delete(':id')
   remove(@Param('id') id: number) {
      return this.atendenteService.remove(Number(id));
   }
}
