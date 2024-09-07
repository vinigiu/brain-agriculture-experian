import { Injectable } from '@nestjs/common';
import { GetDashboardDataResponseDto } from '../../dto/response';
import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';

@Injectable()
class DashboardDataService extends Service {
  constructor(readonly logger: CustomLoggerService) {
    super(logger);
  }

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
