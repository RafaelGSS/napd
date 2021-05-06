import { FastifyInstance } from 'fastify';

export interface Controller {
  registerRoutes(app: FastifyInstance): void;
}
