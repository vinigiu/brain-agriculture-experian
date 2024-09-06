import { ApiProperty } from '@nestjs/swagger';
import { Culture, Farm } from '@prisma/client';

class CultureEntity implements Culture {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  farms: Array<Farm>;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export { CultureEntity };
