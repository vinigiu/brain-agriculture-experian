import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { FarmDto } from '../farm.dto';

class CreateProducerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  document: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  farms: Array<FarmDto>;
}

export { CreateProducerDto };
