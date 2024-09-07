import { Module } from '@nestjs/common';
import { ProducersModule } from './modules/producers/producers.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { CulturesModule } from './modules/cultures/cultures.module';
import { InfraModule } from './infra/infra.module';
import { APP_FILTER } from '@nestjs/core';
import { ErrorHandlerFilter } from './core/errors/filters/errorHandler.filter';
import { HettpErrorHandlerFilter } from './core/errors/filters/httpErrorHandler.filter';

@Module({
  imports: [ProducersModule, DashboardModule, CulturesModule, InfraModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HettpErrorHandlerFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ErrorHandlerFilter,
    },
  ],
})
export class AppModule {}
