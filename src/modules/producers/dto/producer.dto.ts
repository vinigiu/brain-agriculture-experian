import { FarmEntity } from '@/entities/farm.entity';

class ProducerDto {
  id: string;

  name: string;

  document: string;

  farms: Array<FarmEntity>;

  createdAt: Date;

  updatedAt: Date;
}

export { ProducerDto };
