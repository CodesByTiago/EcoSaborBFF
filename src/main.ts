import app from './app';
import './utils/dotenv';

const startServer = async () => {
  try {
    const host = process.env.HOST;
    const port = parseInt(process.env.PORT || '3000');
    await app.listen({ port });
    console.log(`Server running at ${host}:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startServer();
