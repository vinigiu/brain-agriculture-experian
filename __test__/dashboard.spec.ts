import { Test, TestingModule } from '@nestjs/testing';
import { NestExpressApplication } from '@nestjs/platform-express';
import { APP_FILTER } from '@nestjs/core';
import { ErrorHandlerFilter } from '../src/core/errors/filters/errorHandler.filter';
import { AppModule } from '@/app.module';
import { DashboardController } from '@/modules/dashboard/infra/http/dashboard.controller';
import { DashboardDataService } from '@/modules/dashboard/application/services';

describe('ProducersController (e2e)', () => {
  let app: NestExpressApplication;
  let dashboardController: DashboardController;
  let dashboardDataService: DashboardDataService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_FILTER, useClass: ErrorHandlerFilter }],
    }).compile();

    dashboardController =
      moduleFixture.get<DashboardController>(DashboardController);

    dashboardDataService =
      moduleFixture.get<DashboardDataService>(DashboardDataService);

    app = moduleFixture.createNestApplication<NestExpressApplication>();

    await app.listen(0);
  });

  afterAll(async () => {
    await app.close();
  });

  it('ListAllCulturesService', async () => {
    const result = {
      totalFarms: 0,
      totalFarmsArea: 0,
      totalFarmsPerState: [],
      totalFarmsPerCulture: [],
      soilUse: {
        totalUsed: 0,
        totalCultivableArea: 0,
        totalVegetationArea: 0,
        cultivableAreaPercentage: 0,
        vegetationAreaPercentage: 0,
      },
    };
    jest
      .spyOn(dashboardDataService, 'execute')
      .mockImplementation(async () => result);

    expect(await dashboardController.getData()).toBe(result);
  });
});
