import { Producer } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { FarmEntity } from './farm.entity';

class ProducerEntity implements Producer {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  document: string;

  @ApiProperty()
  farms: Array<FarmEntity>;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export { ProducerEntity };
