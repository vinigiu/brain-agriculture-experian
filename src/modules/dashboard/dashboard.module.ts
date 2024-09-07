import { Module } from '@nestjs/common';
import { DashboardController } from './infra/http/dashboard.controller';
import { DashboardDataService } from '../dashboard/application/services';
import { CustomLoggerModule, CustomLoggerService } from '@/infra/logger';

@Module({
  imports: [CustomLoggerModule],
  controllers: [DashboardController],
  providers: [DashboardDataService, CustomLoggerService],
})
class DashboardModule {}

export { DashboardModule };
