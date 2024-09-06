import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
  @ApiProperty()
  cultures: Array<string>;
}

export { FarmDto };
