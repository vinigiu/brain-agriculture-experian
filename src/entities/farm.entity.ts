import { ApiProperty } from '@nestjs/swagger';
import { Culture, Farm } from '@prisma/client';

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
  cultures: Culture[];

  @ApiProperty()
  producerId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export { FarmEntity };
