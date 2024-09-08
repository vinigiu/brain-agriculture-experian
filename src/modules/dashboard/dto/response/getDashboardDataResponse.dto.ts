import { ApiProperty } from '@nestjs/swagger';

class FarmsPerState {
  @ApiProperty()
  state: string;

  @ApiProperty()
  totalFarms: number;
}

class FarmsPerCulture {
  @ApiProperty()
  cultureId: string;

  @ApiProperty()
  cultureName: string;

  @ApiProperty()
  totalFarms: number;
}

class SoilUse {
  @ApiProperty()
  totalUsed: number;

  @ApiProperty()
  totalCultivableArea: number;

  @ApiProperty()
  totalVegetationArea: number;

  @ApiProperty()
  cultivableAreaPercentage: number;

  @ApiProperty()
  vegetationAreaPercentage: number;
}

class GetDashboardDataResponseDto {
  @ApiProperty()
  totalFarms: number;

  @ApiProperty()
  totalFarmsArea: number;

  @ApiProperty({ isArray: true, type: FarmsPerState })
  totalFarmsPerState: Array<FarmsPerState>;

  @ApiProperty({ isArray: true, type: FarmsPerCulture })
  totalFarmsPerCulture: Array<FarmsPerCulture>;

  @ApiProperty({ type: SoilUse })
  soilUse: SoilUse;
}

export { FarmsPerState, FarmsPerCulture, SoilUse, GetDashboardDataResponseDto };
