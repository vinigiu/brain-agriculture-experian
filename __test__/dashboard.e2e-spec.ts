import { Test, TestingModule } from '@nestjs/testing';
import supertest, * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { APP_FILTER } from '@nestjs/core';
import { ErrorHandlerFilter } from '../src/core/errors/filters/errorHandler.filter';

describe('DashboardController (e2e)', () => {
  let app: NestExpressApplication;

  const apiClient = () => {
    return supertest(app.getHttpServer());
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_FILTER, useClass: ErrorHandlerFilter }]
    }).compile();

    app = moduleFixture.createNestApplication<NestExpressApplication>();
    await app.listen(0);
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', async () => {
    const { body: response } = await apiClient().get('/dashboards').expect(200)
    
    expect(typeof response.totalFarms === 'number').toBe(true);
    expect(typeof response.totalFarmsArea === 'number').toBe(true);
    expect(Array.isArray(response.totalFarmsPerState)).toBe(true);
    expect(Array.isArray(response.totalFarmsPerCulture)).toBe(true);
    expect(typeof response.soilUse.totalUsed === 'number').toBe(true);
    expect(typeof response.soilUse.totalCultivableArea === 'number').toBe(true);
    expect(typeof response.soilUse.totalVegetationArea === 'number').toBe(true);
    expect(typeof response.soilUse.cultivableAreaPercentage === 'number').toBe(true);
    expect(typeof response.soilUse.vegetationAreaPercentage === 'number').toBe(true);
  });
});
