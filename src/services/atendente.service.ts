import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atendente } from '../models/atendente.entity';

@Injectable()
export class AtendenteService {
   constructor(
      @InjectRepository(Atendente)
      private atendenteRepository: Repository<Atendente>,
   ) { }

   create(data: Partial<Atendente>) {
      return this.atendenteRepository.save(data);
   }

   findAll() {
      return this.atendenteRepository.find();
   }

   findOne(id: number) {
      return this.atendenteRepository.findOneBy({ id });
   }

   update(id: number, data: Partial<Atendente>) {
      return this.atendenteRepository.update(id, data);
   }

   remove(id: number) {
      return this.atendenteRepository.delete(id);
   }
}
