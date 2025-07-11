import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from './pedido.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  telefone: string;

  @Column("simple-json")
  endereco: {
    // TODO forçar tipagem com DTO
    cep: string;
    estado: string;
    cidade: string;
    rua: string;
    bairro: string;
    numero: string;
    complemento?: string;
  };

  @Column()
  email: string;

  @Column()
  senha: string;

  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];
}
