import { DataSource } from 'typeorm';
import { Cliente } from './models/cliente.entity';
import { Atendente } from './models/atendente.entity';
import { Pedido } from './models/pedido.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'unisenac',
  entities: [Cliente, Atendente, Pedido],
  synchronize: true,
});
