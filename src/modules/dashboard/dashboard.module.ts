import { Module } from '@nestjs/common';
import { DashboardController } from './infra/http/dashboard.controller';
import { DashboardDataService } from '../dashboard/application/services';
import { CustomLoggerModule, CustomLoggerService } from '@/infra/logger';
import { DashboardRepository } from './infra/database/repository/dashboard.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { PrismaModule } from '@/infra/prisma/prisma.module';

@Module({
  imports: [CustomLoggerModule, PrismaModule],
  controllers: [DashboardController],
  providers: [
    DashboardDataService,
    CustomLoggerService,
    PrismaService,
    { useClass: DashboardRepository, provide: 'IDashboardRepository' },
  ],
})
class DashboardModule {}

export { DashboardModule };
