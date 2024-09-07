import { Inject, Injectable } from '@nestjs/common';
import {
  FarmsPerCulture,
  FarmsPerState,
  GetDashboardDataResponseDto,
} from '../../dto/response';
import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';
import { IDashboardRepository } from '../database/repository/dashboardRepository.interface';
import { Farm } from '@prisma/client';

@Injectable()
class DashboardDataService extends Service {
  constructor(
    readonly logger: CustomLoggerService,
    @Inject('IDashboardRepository')
    private readonly dashboardRespository: IDashboardRepository,
  ) {
    super(logger);
  }

  async execute(): Promise<GetDashboardDataResponseDto> {
    const farmsData = await this.dashboardRespository.findAll();
    const farmsPerStateData = await this.dashboardRespository.findAllPerState();
    const farmsPerStateResponse: FarmsPerState[] = farmsPerStateData.map(
      (farm) => {
        return {
          state: farm.state as string,
          totalFarms: farm.count,
        };
      },
    );
    const farmsPerCulture: Array<FarmsPerCulture> =
      await this.dashboardRespository.findAllPerCulture();

    const totals = this.getTotals(farmsData);

    const totalUsed = totals.totalCultivableArea + totals.totalVegetationArea;

    return {
      soilUse: {
        totalUsed,
        totalCultivableArea: totals.totalCultivableArea,
        totalVegetationArea: totals.totalVegetationArea,
        cultivableAreaPercentage: totals.totalCultivableArea / totalUsed,
        vegetationAreaPercentage: totals.totalVegetationArea / totalUsed,
      },
      totalFarms: farmsData.length,
      totalFarmsArea: totals.totalFarmsArea,
      totalFarmsPerCulture: farmsPerCulture,
      totalFarmsPerState: farmsPerStateResponse,
    };
  }

  private getTotals(farms: Farm[]) {
    console.log('FARMS::::::', farms);
    let totalCultivableArea: number = 0;
    let totalVegetationArea: number = 0;
    let totalFarmsArea: number = 0;

    for (const farm of farms) {
      totalCultivableArea += farm.cultivableArea;
      totalVegetationArea += farm.vegetationArea;
      totalFarmsArea += farm.totalArea;
    }

    return {
      totalCultivableArea,
      totalVegetationArea,
      totalFarmsArea,
    };
  }
}

export { DashboardDataService };
