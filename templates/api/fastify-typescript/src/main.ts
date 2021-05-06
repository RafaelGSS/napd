import Fastify from 'fastify';
import Environment from './config';
import loadApp from './server';

async function bootstrap(): Promise<void> {
  const app = Fastify({ logger: { level: Environment.loggerLevel } });
  app.register(loadApp);
  await app.listen(Environment.port as number, '0.0.0.0');
}

bootstrap();
