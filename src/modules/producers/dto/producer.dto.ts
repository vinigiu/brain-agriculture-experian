import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { FarmDto } from './farm.dto';
import { FarmEntity } from '@/entities/farm.entity';

class ProducerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Id do produtor' })
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome do produtor' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Número do documento (CPF/CNPJ) do produtor' })
  document: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Listagem de fazendas do produtor',
    isArray: true,
    type: FarmDto,
  })
  farms: Array<FarmEntity>;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'Data de criação do produtor' })
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'Data da última atualização do produtor' })
  updatedAt: Date;
}

export { ProducerDto };
