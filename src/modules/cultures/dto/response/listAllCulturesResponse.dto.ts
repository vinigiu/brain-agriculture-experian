import { ApiProperty } from '@nestjs/swagger';

class CultureDataResponseDto {
  @ApiProperty({ description: 'Id da Cultura' })
  id: string;

  @ApiProperty({ description: 'Nome da Cultura' })
  name: string;

  @ApiProperty({ description: 'Data de criação da Cultura' })
  createdAt: Date;

  @ApiProperty({ description: 'Data da última atualização da Cultura' })
  updatedAt: Date;
}

class ListAllCulturesResponseDto {
  @ApiProperty({
    description: 'Listagem das culturas',
    isArray: true,
    type: CultureDataResponseDto,
  })
  cultures: Array<CultureDataResponseDto>;
}

export { CultureDataResponseDto, ListAllCulturesResponseDto };
