import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from './pedido.entity';

@Entity()
export class Atendente {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   nome: string;

   @OneToMany(() => Pedido, pedido => pedido.atendente)
   pedidos: Pedido[];
}
