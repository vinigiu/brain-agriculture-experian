import { Module } from '@nestjs/common';
import { ProducersController } from './infra/http/producers.controller';
import {
  CreateProducerService,
  DeleteProducerService,
  DetailProducerService,
  ListAllProducersService,
  UpdateProducerService,
} from './application/services';
import { CustomLoggerModule, CustomLoggerService } from '@/infra/logger';

@Module({
  imports: [CustomLoggerModule],
  controllers: [ProducersController],
  providers: [
    CreateProducerService,
    DeleteProducerService,
    DetailProducerService,
    ListAllProducersService,
    UpdateProducerService,
    CustomLoggerService,
  ],
})
class ProducersModule {}

export { ProducersModule };
