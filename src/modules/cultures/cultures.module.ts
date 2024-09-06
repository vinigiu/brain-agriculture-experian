import { Module } from '@nestjs/common';
import { CulturesController } from './infra/http/cultures.controller';
import { ListAllCulturesService } from './application/services';

@Module({
  controllers: [CulturesController],
  providers: [ListAllCulturesService],
})
class CulturesModule {}

export { CulturesModule };
