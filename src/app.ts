import fastify from 'fastify';
import TypeormFastifyPlugin from 'typeorm-fastify-plugin';
import cors from '@fastify/cors';
import { dataSourceOptions } from './config/database';
import registeredRoutes from './routes';
import './utils/dotenv';

const app = fastify();
// CORS
app.register(cors, {
  origin: `${process.env.CORS_ORIGIN}`,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
});

// DBConn
app.register(TypeormFastifyPlugin, { ...dataSourceOptions });

// Registered Routes
app.register(registeredRoutes);

app.get('/', function (request, reply) {
  reply.send('EcoSabor API');
});

export default app;
