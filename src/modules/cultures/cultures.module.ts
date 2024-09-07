import { Module } from '@nestjs/common';
import { CulturesController } from './infra/http/cultures.controller';
import { ListAllCulturesService } from './application/services';
import { CustomLoggerModule, CustomLoggerService } from '@/infra/logger';

@Module({
  imports: [CustomLoggerModule],
  controllers: [CulturesController],
  providers: [ListAllCulturesService, CustomLoggerService],
})
class CulturesModule {}

export { CulturesModule };
