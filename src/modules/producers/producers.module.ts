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
import { PrismaService } from '@/infra/prisma/prisma.service';
import { PrismaModule } from '@/infra/prisma/prisma.module';
import { ProducersRepository } from './infra/database/repository/producers.repository';

@Module({
  imports: [CustomLoggerModule, PrismaModule],
  controllers: [ProducersController],
  providers: [
    CreateProducerService,
    DeleteProducerService,
    DetailProducerService,
    ListAllProducersService,
    UpdateProducerService,
    CustomLoggerService,
    PrismaService,
    { useClass: ProducersRepository, provide: 'IProducersRepository' },
  ],
})
class ProducersModule {}

export { ProducersModule };
