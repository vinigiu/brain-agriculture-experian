class FarmsPerState {
  state: string;
  totalFarms: number;
}

class FarmsPerCulture {
  cultureId: string;
  cultureName: string;
  totalFarms: number;
}

class SoilUse {
  totalUsed: number;
  totalCultivableArea: number;
  totalVegetationArea: number;
  cultivableAreaPercentage: number;
  vegetationAreaPercentage: number;
}

class GetDashboardDataResponseDto {
  totalFarms: number;
  totalFarmsArea: number;
  totalFarmsPerState: Array<FarmsPerState>;
  totalFarmsPerCulture: Array<FarmsPerCulture>;
  soilUse: SoilUse;
}

export { FarmsPerState, FarmsPerCulture, SoilUse, GetDashboardDataResponseDto };
