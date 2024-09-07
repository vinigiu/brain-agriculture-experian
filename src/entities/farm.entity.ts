import { ApiProperty } from '@nestjs/swagger';
import { Farm } from '@prisma/client';
import { CultureEntity } from './culture.entity';

class FarmEntity implements Farm {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  totalArea: number;

  @ApiProperty()
  cultivableArea: number;

  @ApiProperty()
  vegetationArea: number;

  @ApiProperty()
  cultures: CultureEntity[];

  @ApiProperty()
  producerId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export { FarmEntity };
