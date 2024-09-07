import { Culture } from '@prisma/client';

interface ICulturesRepository {
  findAll(): Promise<Array<Culture>>;
}

export { ICulturesRepository };
