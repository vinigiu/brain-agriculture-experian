import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Farm } from '@prisma/client';

class UpdateProducerDto {
  @IsString()
  @ApiProperty()
  document?: string;

  @IsString()
  @ApiProperty()
  name?: string;

  @IsString()
  @ApiProperty()
  farms?: Array<Partial<Farm>>;
}

export { UpdateProducerDto };
