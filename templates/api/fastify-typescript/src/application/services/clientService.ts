import { CreateClientRequestDto } from 'application/dtos/createClientRequestDto';
import { Client } from '../../domain/client/client.entity';

export class ClientService {
  constructor() {}

 public async createClient(_request: CreateClientRequestDto): Promise<Client> {
   return new Client();
  }
}
