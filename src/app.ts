import fastify from 'fastify';
import registeredRoutes from './routes';

const app = fastify();

// Registered Routes
app.register(registeredRoutes);

export default app;
