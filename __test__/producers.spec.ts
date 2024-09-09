import { Test, TestingModule } from '@nestjs/testing';
import { NestExpressApplication } from '@nestjs/platform-express';
import { APP_FILTER } from '@nestjs/core';
import { ErrorHandlerFilter } from '../src/core/errors/filters/errorHandler.filter';
import { AppModule } from '@/app.module';
import {
  CreateProducerService,
  DeleteProducerService,
  DetailProducerService,
  ListAllProducersService,
  UpdateProducerService,
} from '@/modules/producers/application/services';
import { ProducersController } from '@/modules/producers/infra/http/producers.controller';
import { crateProducerMock } from './mocks/producers/createProducer.mock';
import { updateProducerMock } from './mocks/producers/updateProducer.mock';

describe('ProducersController (e2e)', () => {
  let app: NestExpressApplication;
  let producersController: ProducersController;
  let listAllProducersService: ListAllProducersService;
  let createProducerService: CreateProducerService;
  let deleteProducerService: DeleteProducerService;
  let detailProducerService: DetailProducerService;
  let updateProducerService: UpdateProducerService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_FILTER, useClass: ErrorHandlerFilter }],
    }).compile();

    producersController =
      moduleFixture.get<ProducersController>(ProducersController);

    listAllProducersService = moduleFixture.get<ListAllProducersService>(
      ListAllProducersService,
    );

    detailProducerService = moduleFixture.get<DetailProducerService>(
      DetailProducerService,
    );

    deleteProducerService = moduleFixture.get<DeleteProducerService>(
      DeleteProducerService,
    );

    createProducerService = moduleFixture.get<CreateProducerService>(
      CreateProducerService,
    );

    updateProducerService = moduleFixture.get<UpdateProducerService>(
      UpdateProducerService,
    );

    app = moduleFixture.createNestApplication<NestExpressApplication>();

    await app.listen(0);
  });

  afterAll(async () => {
    await app.close();
  });

  it('ListAllProducersService', async () => {
    const result = { producers: [] };
    jest
      .spyOn(listAllProducersService, 'execute')
      .mockImplementation(async () => result);

    expect(await producersController.listAll()).toBe(result);
  });

  it('DetailProducerService', async () => {
    const result = {
      id: '1',
      document: '12345678911',
      name: 'Vinícius Giuseppe',
      farms: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest
      .spyOn(detailProducerService, 'execute')
      .mockImplementation(async () => result);

    expect(await producersController.detail(result.id)).toBe(result);
  });

  it('DeleteProducerService', async () => {
    const result = {
      success: true,
    };
    jest
      .spyOn(deleteProducerService, 'execute')
      .mockImplementation(async () => result);

    expect(await producersController.delete('1')).toBe(result);
  });

  it('CreateProducerService', async () => {
    const result = {
      success: true,
    };
    jest
      .spyOn(createProducerService, 'execute')
      .mockImplementation(async () => result);

    expect(await producersController.create(crateProducerMock)).toBe(result);
  });

  it('/:id (UPDATE)', async () => {
    const result = {
      success: true,
    };
    jest
      .spyOn(updateProducerService, 'execute')
      .mockImplementation(async () => result);

    expect(await producersController.update('1', updateProducerMock)).toBe(
      result,
    );
  });
});
