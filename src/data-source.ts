import { DataSource } from 'typeorm';
import { Cliente } from './models/cliente.entity';
import { Atendente } from './models/atendente.entity';
import { Pedido } from './models/pedido.entity';
import 'dotenv/config'

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.SUPABASE_SESSION_URL,
  // host: process.env.SUPABASE_HOST,
  // port: Number(process.env.SUPABASE_PORT),
  // username: process.env.SUPABASE_USERNAME,
  // password: process.env.SUPABASE_PASSWORD,
  // database: process.env.SUPABASE_DATABASE,
  entities: [Cliente, Atendente, Pedido],
  synchronize: false,
});