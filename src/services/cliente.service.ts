import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../models/cliente.entity';

@Injectable()
export class ClienteService {
   constructor(
      @InjectRepository(Cliente)
      private clienteRepository: Repository<Cliente>,
   ) { }

   create(data: Partial<Cliente>) {
      return this.clienteRepository.save(data);
   }

   findAll() {
      return this.clienteRepository.find();
   }

   findOne(id: number) {
      return this.clienteRepository.findOneBy({ id });
   }

   update(id: number, data: Partial<Cliente>) {
      return this.clienteRepository.update(id, data);
   }

   remove(id: number) {
      return this.clienteRepository.delete(id);
   }
}
