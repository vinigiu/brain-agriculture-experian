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
  @ApiProperty({ description: 'Nome da fazenda' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Cidade da fazenda' })
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Sigla do estado da fazenda' })
  state: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Área total da fazenda' })
  totalArea: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Área cultivável da fazenda' })
  cultivableArea: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Área de vegetação da fazenda' })
  vegetationArea: number;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Listagem de culturas da fazenda',
    isArray: true,
    type: CultureDto,
  })
  cultures: Array<CultureDto>;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'Data de criação desta fazenda' })
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'Data da última atualização desta fazenda' })
  updatedAt: Date;
}

export { FarmDto };
