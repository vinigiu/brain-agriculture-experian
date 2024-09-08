import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { FarmDto } from './farm.dto';
import { FarmEntity } from '@/entities/farm.entity';

class ProducerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  document: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ isArray: true, type: FarmDto })
  farms: Array<FarmEntity>;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  updatedAt: Date;
}

export { ProducerDto };
