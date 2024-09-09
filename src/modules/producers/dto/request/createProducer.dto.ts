import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

class CreateCultureDto {
  @IsString()
  @ApiProperty({ description: 'Id da cultura' })
  id: string;

  @IsString()
  @ApiProperty({ description: 'Nome da cultura' })
  name?: string;
}
class CreateFarmDto {
  @IsString()
  @ApiProperty({ description: 'Nome da fazenda' })
  name: string;

  @IsString()
  @ApiProperty({ description: 'Cidade da fazenda' })
  city: string;

  @IsString()
  @ApiProperty({ description: 'Sigla do Estado da fazenda' })
  state: string;

  @IsNumber()
  @ApiProperty({ description: 'Área total da fazenda' })
  totalArea: number;

  @IsNumber()
  @ApiProperty({ description: 'Área cultivável da fazenda' })
  cultivableArea: number;

  @IsNumber()
  @ApiProperty({ description: 'Área de vegetação da fazenda' })
  vegetationArea: number;

  @IsArray()
  @ApiProperty({
    description: 'Listagem de culturas da fazenda',
    isArray: true,
    type: CreateCultureDto,
  })
  cultures: Array<CreateCultureDto>;
}
class CreateProducerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Número do documento (CPF/CNPJ) do produtor' })
  document: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome do produtor' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Listagem de fazendas do produtor',
    isArray: true,
    type: CreateFarmDto,
  })
  farms: Array<CreateFarmDto>;
}

export { CreateProducerDto };
