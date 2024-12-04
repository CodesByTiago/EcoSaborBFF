# EcoSabor BFF API

Projeto BFF idealizado para fins de estudo de como criar uma aplicação
back-end usando Node.js + Fastify.

<hr />

**O que foi usado no projeto do BFF:**

- Node.js
- Fastify
- TypeScript
- TypeORM
- JWT
- Swagger
- Postgres
- BCrypt
- Docker
- ESLint
- Prettier
- Husky

<hr />

**Organização do projeto com estrutura baseada em recursos:**

```
src
  |-- resources
      |-- user
          |-- user.controller.ts
          |-- user.entity.ts
          |-- user.service.ts
          |-- user.routes.ts
      |-- customers
          |-- customer.controller.ts
          |-- customer.entity.ts
          |-- customer.service.ts
          |-- customer.routes.ts
      |-- products
          |-- product.controller.ts
          |-- product.entity.ts
          |-- product.service.ts
          |-- product.routes.ts
  |-- routes
      |-- index.ts
  |-- config
      |-- database.ts
  |-- plugins
      |-- jwt.ts
      |-- typeorm.ts
  |-- utils
      |-- hash.ts
      |-- dotenv.ts
  |-- app.ts
  |-- server.ts
|-- .gitignore
|-- .env
|-- tsconfig.json
|-- package.json
|-- README.md
```

<hr />

**Ações necessárias para rodar o projeto em sua máquina:**

```
1 - Clone ou baixe o repositório <br />
2 - Tenha instalado e rodando o Docker em sua máquina
3 - Execute o comando para instalar os pacotes necessários: `npm run install` <br />
4 - Rode o comando para subir os containers do banco e pgadmin: `docker compose up -d`
3 - Rode o projeto executando o comando: `npm run start:dev` <br />
```
