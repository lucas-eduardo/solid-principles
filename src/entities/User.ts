import { uuid } from 'uuidv4';

export class User {
  public readonly id: string;
  
  public readonly name: string;
  
  public readonly email: string;
  
  public readonly password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}