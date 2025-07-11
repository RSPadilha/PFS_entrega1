import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../models/cliente.entity';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class ClienteService {
   constructor(
      @InjectRepository(Cliente)
      private clienteRepository: Repository<Cliente>,
   ) { }

   create(data: Cliente) {
      if (!data.nome || !data.email || !data.telefone || !data.senha || !data.endereco) {
         throw new BadRequestException('Dados inválidos: todos os campos devem ser preenchidos.');
      }
      const salt = bcrypt.genSaltSync(10);
      data.senha = bcrypt.hashSync(data.senha, salt);
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
