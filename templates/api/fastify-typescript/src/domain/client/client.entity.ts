export class Client {
  public id: number;

  public name: string;

  public email: string;

  public address: string;

  constructor(partial?: Partial<Client>) {
    Object.assign(this, partial);
  }
}
