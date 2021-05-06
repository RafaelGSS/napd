import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { ClientController } from '../../web/client.controller';
import { ClientService } from '../services/clientService';

const clientModule: FastifyPluginAsync = async (fastify: FastifyInstance): Promise<void> => {
  const controller = new ClientController(
    new ClientService(),
  );
  controller.registerRoutes(fastify);
};

export default clientModule;
