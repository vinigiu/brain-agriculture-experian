import { Module } from '@nestjs/common';
import { DashboardController } from './infra/http/dashboard.controller';
import { DashboardDataService } from '../dashboard/application/services';

@Module({
  controllers: [DashboardController],
  providers: [DashboardDataService],
})
class DashboardModule {}

export { DashboardModule };
