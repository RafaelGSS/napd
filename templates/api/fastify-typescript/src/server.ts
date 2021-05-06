import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import fastifySwagger from 'fastify-swagger';
import fp from 'fastify-plugin';
import Environment from './config';
import clientModule from './application/modules/clientModule';

export const registerPlugins = fp(async (app: FastifyInstance): Promise<void> => {
  app.register(fastifySwagger as any /* limitation from plugin */, Environment.swagger);
});

export const registerModules = (modules: FastifyPluginAsync[]) => fp(async (app: FastifyInstance): Promise<void> => {
  for (const moduleFn of modules) {
    await moduleFn(app, {});
  }
});

const loadApp: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  await fastify.register(registerPlugins);
  await fastify.register(registerModules([clientModule]));
  console.log(fastify.printRoutes());
};

export default loadApp;
