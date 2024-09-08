import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

class UpdateCultureDto {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  name?: string;
}
class UpdateFarmDto {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  name?: string;

  @IsString()
  @ApiProperty()
  city?: string;

  @IsString()
  @ApiProperty()
  state?: string;

  @IsNumber()
  @ApiProperty()
  totalArea?: number;

  @IsNumber()
  @ApiProperty()
  cultivableArea?: number;

  @IsNumber()
  @ApiProperty()
  vegetationArea?: number;

  @IsArray()
  @ApiProperty({ isArray: true, type: UpdateCultureDto })
  cultures?: Array<UpdateCultureDto>;
}

class UpdateProducerDto {
  @IsString()
  @ApiProperty()
  document?: string;

  @IsString()
  @ApiProperty()
  name?: string;

  @IsArray()
  @ApiProperty({ isArray: true })
  farms?: Array<UpdateFarmDto>;
}

export { UpdateProducerDto };
