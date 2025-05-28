import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Atendente {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   nome: string;

   @OneToMany('Pedido', 'atendente')
   pedidos: any[];
}
