import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { FarmDto } from '../farm.dto';

class UpdateProducerDto {
  @IsString()
  @ApiProperty()
  document?: string;

  @IsString()
  @ApiProperty()
  name?: string;

  @IsString()
  @ApiProperty()
  farms?: Array<FarmDto>;
}

export { UpdateProducerDto };
