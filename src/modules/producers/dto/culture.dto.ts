import { IsArray, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { FarmDto } from './farm.dto';
import { ApiProperty } from '@nestjs/swagger';

class CultureDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ isArray: true, type: FarmDto })
  farms: Array<FarmDto>;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  updatedAt: Date;
}

export { CultureDto };
