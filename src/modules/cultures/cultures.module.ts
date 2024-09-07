import { Module } from '@nestjs/common';
import { CulturesController } from './infra/http/cultures.controller';
import { ListAllCulturesService } from './application/services';
import { CustomLoggerModule, CustomLoggerService } from '@/infra/logger';
import { CulturesRepository } from './infra/database/cultures.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { PrismaModule } from '@/infra/prisma/prisma.module';

@Module({
  imports: [CustomLoggerModule, PrismaModule],
  controllers: [CulturesController],
  providers: [
    ListAllCulturesService,
    CustomLoggerService,
    PrismaService,
    { useClass: CulturesRepository, provide: 'ICulturesRepository' },
  ],
})
class CulturesModule {}

export { CulturesModule };
