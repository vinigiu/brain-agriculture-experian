import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { FarmDto } from '../farm.dto';
import { FarmEntity } from '@/entities/farm.entity';

class CreateProducerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  document: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty({ isArray: true, type: FarmDto })
  farms: Array<FarmEntity>;
}

export { CreateProducerDto };
