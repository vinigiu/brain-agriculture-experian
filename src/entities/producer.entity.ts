import { Farm, Producer } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

class ProducerEntity implements Producer {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  document: string;

  @ApiProperty()
  farms: Array<Farm>;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export { ProducerEntity };
