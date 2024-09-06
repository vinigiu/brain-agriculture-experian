import { Injectable } from '@nestjs/common';
import { GetDashboardDataResponseDto } from '../../dto/response';

@Injectable()
class DashboardDataService {
  async execute(): Promise<GetDashboardDataResponseDto> {
    return {
      soilUse: {
        cultivableAreaPercentage: 0,
        totalCultivableArea: 0,
        totalUsed: 0,
        totalVegetationArea: 0,
        vegetationAreaPercentage: 0,
      },
      totalFarms: 0,
      totalFarmsArea: 0,
      totalFarmsPerCulture: [],
      totalFarmsPerState: [],
    };
  }
}

export { DashboardDataService };
