import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Atendente } from './atendente.entity';

@Entity()
export class Pedido {
   @PrimaryGeneratedColumn()
   id: number;

   @ManyToOne(() => Cliente, cliente => cliente.pedidos, { eager: true })
   cliente: Cliente;

   @ManyToOne(() => Atendente, atendente => atendente.pedidos, { eager: true })
   atendente: Atendente;

   @Column('decimal')
   valor: number;

   @Column()
   descricao: string;

   @Column({ type: 'timestamp' })
   data: Date;
}
