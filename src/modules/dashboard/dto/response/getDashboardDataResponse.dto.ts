import { ApiProperty } from '@nestjs/swagger';

class FarmsPerState {
  @ApiProperty({ description: 'Sigla do Estado' })
  state: string;

  @ApiProperty({ description: 'Total de fazendas' })
  totalFarms: number;
}

class FarmsPerCulture {
  @ApiProperty({ description: 'Id da Cultura' })
  cultureId: string;

  @ApiProperty({ description: 'Nome da cultura' })
  cultureName: string;

  @ApiProperty({ description: 'Quantidade de fazendas' })
  totalFarms: number;
}

class SoilUse {
  @ApiProperty({ description: 'Área total utilizada' })
  totalUsed: number;

  @ApiProperty({ description: 'Área total cultivável' })
  totalCultivableArea: number;

  @ApiProperty({ description: 'Área total de vegetação' })
  totalVegetationArea: number;

  @ApiProperty({ description: 'Percentual de área cultivável' })
  cultivableAreaPercentage: number;

  @ApiProperty({ description: 'Percentual de área de vegetação' })
  vegetationAreaPercentage: number;
}

class GetDashboardDataResponseDto {
  @ApiProperty({ description: 'Quantidade total de fazendas' })
  totalFarms: number;

  @ApiProperty({ description: 'Quantidade total de área das fazendas' })
  totalFarmsArea: number;

  @ApiProperty({ description: 'Quantidade de fazendas por estado' })
  totalFarmsPerState: Array<FarmsPerState>;

  @ApiProperty({
    description: 'Quantidade de fazendas por tipo de cultura',
    isArray: true,
    type: FarmsPerCulture,
  })
  totalFarmsPerCulture: Array<FarmsPerCulture>;

  @ApiProperty({ description: 'Dados de uso do solo', type: SoilUse })
  soilUse: SoilUse;
}

export { FarmsPerState, FarmsPerCulture, SoilUse, GetDashboardDataResponseDto };
