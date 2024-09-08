import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { CultureDto } from './culture.dto';

class FarmDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  state: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  totalArea: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  cultivableArea: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  vegetationArea: number;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ isArray: true, type: CultureDto })
  cultures: Array<CultureDto>;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  updatedAt: Date;
}

export { FarmDto };
