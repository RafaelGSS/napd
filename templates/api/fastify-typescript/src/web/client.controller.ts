import { CreateClientRequestDto } from '../application/dtos/createClientRequestDto';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { ClientService } from '../application/services/clientService';
import { buildErrorResponse, buildSuccessResponse } from '../infra/responseApi';
import { Controller } from './controller';

const createSchema = {
  tags: ['Client'],
  summary: 'Create Client',
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      address: { type: 'string' },
      email: { type: 'string' },
    },
    required: ['name', 'address', 'email'],
  },
};

export class ClientController implements Controller {
  constructor(private clientService: ClientService) {}

  registerRoutes(app: FastifyInstance): void {
    app.post(
      '/client',
      { schema: createSchema, attachValidation: true },
      this.createClientHandler.bind(this),
    );
  }

  public async createClientHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    if (request.validationError) {
      reply.code(400).send(buildErrorResponse({ message: request.validationError.message }));
      return;
    }

    const createRequest = request.body as CreateClientRequestDto;
    const client = await this.clientService.createClient(createRequest);
    reply.code(201).send(buildSuccessResponse(client));
  }
}
