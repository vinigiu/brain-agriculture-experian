import { IsArray, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { FarmDto } from './farm.dto';
import { ApiProperty } from '@nestjs/swagger';

class CultureDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Id da cultura' })
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome da cultura' })
  name: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Listagem de fazendas que possuem esta cultura',
    isArray: true,
    type: FarmDto,
  })
  farms: Array<FarmDto>;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'Data de criação desta cultura' })
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'Data da última alteração desta cultura' })
  updatedAt: Date;
}

export { CultureDto };
