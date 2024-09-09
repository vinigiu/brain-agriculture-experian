import { Test, TestingModule } from '@nestjs/testing';
import { NestExpressApplication } from '@nestjs/platform-express';
import { APP_FILTER } from '@nestjs/core';
import { ErrorHandlerFilter } from '../src/core/errors/filters/errorHandler.filter';
import { AppModule } from '@/app.module';
import { CulturesController } from '@/modules/cultures/infra/http/cultures.controller';
import { ListAllCulturesService } from '@/modules/cultures/application/services';

describe('ProducersController (e2e)', () => {
  let app: NestExpressApplication;
  let culturesController: CulturesController;
  let listAllCulturesService: ListAllCulturesService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_FILTER, useClass: ErrorHandlerFilter }],
    }).compile();

    culturesController =
      moduleFixture.get<CulturesController>(CulturesController);

    listAllCulturesService = moduleFixture.get<ListAllCulturesService>(
      ListAllCulturesService,
    );

    app = moduleFixture.createNestApplication<NestExpressApplication>();

    await app.listen(0);
  });

  afterAll(async () => {
    await app.close();
  });

  it('ListAllCulturesService', async () => {
    const result = { cultures: [] };
    jest
      .spyOn(listAllCulturesService, 'execute')
      .mockImplementation(async () => result);

    expect(await culturesController.listAll()).toBe(result);
  });
});
