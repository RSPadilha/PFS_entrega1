import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cliente } from './models/cliente.entity';
import { Atendente } from './models/atendente.entity';
import { Pedido } from './models/pedido.entity';
import { ClienteService } from './services/cliente.service';
import { AtendenteService } from './services/atendente.service';
import { PedidoService } from './services/pedido.service';
import { ClienteController } from './controllers/cliente.controller';
import { AtendenteController } from './controllers/atendente.controller';
import { PedidoController } from './controllers/pedido.controller';
import { AppDataSource } from './data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
    }),
    TypeOrmModule.forFeature([Cliente, Atendente, Pedido]),
  ],
  controllers: [AppController, ClienteController, AtendenteController, PedidoController],
  providers: [AppService, ClienteService, AtendenteService, PedidoService],
})
export class AppModule { }
