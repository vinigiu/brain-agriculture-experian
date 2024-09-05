import { Module } from '@nestjs/common';
import { ProducersController } from './infra/http/producers.controller';
import {
  CreateProducerService,
  DeleteProducerService,
  DetailProducerService,
  ListAllProducersService,
  UpdateProducerService,
} from './application/services';

@Module({
  controllers: [ProducersController],
  providers: [
    CreateProducerService,
    DeleteProducerService,
    DetailProducerService,
    ListAllProducersService,
    UpdateProducerService,
  ],
})
class ProducersModule {}

export { ProducersModule };
