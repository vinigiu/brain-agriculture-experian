import { Module } from '@nestjs/common';
import { ProducersModule } from './modules/producers/producers.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@Module({
  imports: [ProducersModule, DashboardModule],
  providers: [],
})
export class AppModule {}
