# EcoSabor BFF API

Projeto BFF idealizado para fins de estudo de como criar uma aplicação
back-end usando Node.js + Fastify.

<hr />

**O que foi usado no projeto do BFF:**

- Node.js
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
