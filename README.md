# Projeto Empresa Prestadora de Serviços - Backend

Este projeto é um backend em NestJS, TypeScript, TypeORM e PostgreSQL. Ele implementa uma API RESTful para gerenciar clientes, atendentes e pedidos.

## Funcionalidades
- CRUD de Clientes
- CRUD de Atendentes
- CRUD de Pedidos (relacionando cliente e atendente)

## Como rodar o projeto
1. Instale as dependências:
   ```cmd
   npm install
   ```
2. Configure o banco de dados PostgreSQL em `src/data-source.ts`

3. Rode o projeto:
   ```cmd
   npm run start
   ```

## Endpoints
   ### Clientes

   **GET** [`/clientes`](http://localhost:3000/clientes)  
      Lista todos os clientes.

   **POST** [`/clientes`](http://localhost:3000/clientes)  
      Cria um novo cliente passando um body json { nome, email }

   **PUT** [`/clientes/:id`](http://localhost:3000/clientes/:id)  
      Atualiza um cliente existente passando um body json { nome, email }

   **DELETE** [`/clientes/:id`](http://localhost:3000/clientes/:id)  
      Remove um cliente.
