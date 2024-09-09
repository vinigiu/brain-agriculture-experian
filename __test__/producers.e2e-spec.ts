import { Test, TestingModule } from '@nestjs/testing';
import * as supertest from 'supertest';
import { AppModule } from '../src/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { APP_FILTER } from '@nestjs/core';
import { ErrorHandlerFilter } from '../src/core/errors/filters/errorHandler.filter';
import { crateProducerMock } from './mocks/producers/createProducer.mock';
import { ListAllProducersServiceMock } from './mocks/producers/listAllProducers.service.mock';
import {
  CreateProducerService,
  DeleteProducerService,
  DetailProducerService,
  ListAllProducersService,
  UpdateProducerService,
} from '../src/modules/producers/application/services';
import { DetailProducerServiceMock } from './mocks/producers/detailProducer.service.mock';
import { CreateProducerServiceMock } from './mocks/producers/createProducer.service.mock';
import { UpdateProducerServiceMock } from './mocks/producers/updateProducer.service.mock';
import { DeleteProducerServiceMock } from './mocks/producers/deleteProducer.service.mock';

describe('ProducersController (e2e)', () => {
  let app: NestExpressApplication;

  const apiClient = () => {
    return supertest(app.getHttpServer());
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
        { provide: APP_FILTER, useClass: ErrorHandlerFilter },
        {
          provide: ListAllProducersService,
          useValue: ListAllProducersServiceMock,
        },
        {
          provide: DetailProducerService,
          useValue: DetailProducerServiceMock,
        },
        {
          provide: CreateProducerService,
          useValue: CreateProducerServiceMock,
        },
        {
          provide: UpdateProducerService,
          useValue: UpdateProducerServiceMock,
        },
        {
          provide: DeleteProducerService,
          useValue: DeleteProducerServiceMock,
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication<NestExpressApplication>();

    await app.listen(0);
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', async () => {
    const { body: response } = await apiClient().get('/producers').expect(200);

    expect(Array.isArray(response.producers)).toBe(true);
  });

  it('/:id (GET)', async () => {
    const { body: responseProducers } = await apiClient().get('/producers');
    const { body: responseDetail } = await apiClient()
      .get(`/producers/${responseProducers[0].id}`)
      .expect(200);

    expect(typeof responseDetail.id === 'string').toBe(true);
    expect(typeof responseDetail.name === 'string').toBe(true);
    expect(typeof responseDetail.document === 'string').toBe(true);
    expect(Array.isArray(responseDetail.farms)).toBe(true);
    expect(typeof responseDetail.createdAt === 'string').toBe(true);
    expect(typeof responseDetail.updatedAt === 'string').toBe(true);
  });

  it('/:id (DELETE)', async () => {
    const { body: responseProducers } = await apiClient().get('/producers');
    const { body: responseDelete } = await apiClient()
      .delete(`/producers/${responseProducers.producers[0].id}`)
      .expect(200);

    expect(responseDelete.success).toBe(true);
  });

  it('/ (CREATE)', async () => {
    const data = { ...crateProducerMock };
    data.farms[0].cultures.push({
      id: '23123142ij-12fuh17h94-01v98h49817h-vh91u34hg89',
      name: 'Milho',
    });

    const { body: response } = await apiClient()
      .post(`/producers`)
      .send(data)
      .expect(200);

    expect(response.success).toBe(true);
  });

  it('/:id (UPDATE)', async () => {
    const { body: responseProducers } = await apiClient().get('/producers');
    console.log('PRODUCERS::::::::::', responseProducers);
    const { body: response } = await apiClient()
      .patch(`/producers/${responseProducers.producers[0].id}`)
      .send({ name: 'Alberto Senna' })
      .expect(200);

    expect(response.success).toBe(true);
  });
});
