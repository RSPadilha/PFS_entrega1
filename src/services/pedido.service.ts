import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from '../models/pedido.entity';

@Injectable()
export class PedidoService {
   constructor(
      @InjectRepository(Pedido)
      private pedidoRepository: Repository<Pedido>,
   ) { }

   create(data: Partial<Pedido>) {
      return this.pedidoRepository.save(data);
   }

   findAll() {
      return this.pedidoRepository.find();
   }

   findOne(id: number) {
      return this.pedidoRepository.findOneBy({ id });
   }

   update(id: number, data: Partial<Pedido>) {
      return this.pedidoRepository.update(id, data);
   }

   remove(id: number) {
      return this.pedidoRepository.delete(id);
   }
}
