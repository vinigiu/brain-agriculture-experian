import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

class CreateCultureDto {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  name?: string;
}
class CreateFarmDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  city: string;

  @IsString()
  @ApiProperty()
  state: string;

  @IsNumber()
  @ApiProperty()
  totalArea: number;

  @IsNumber()
  @ApiProperty()
  cultivableArea: number;

  @IsNumber()
  @ApiProperty()
  vegetationArea: number;

  @IsArray()
  @ApiProperty({ isArray: true, type: CreateCultureDto })
  cultures: Array<CreateCultureDto>;
}
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
  @ApiProperty({ isArray: true, type: CreateFarmDto })
  farms: Array<CreateFarmDto>;
}

export { CreateProducerDto };
