import { FarmDto } from './farm.dto';

class ProducerDto {
  id: string;

  name: string;

  document: string;

  farms: Array<FarmDto>;

  createdAt: string;

  updatedAt: string;
}

export { ProducerDto };
