import { Global, Module } from '@nestjs/common';
import { CustomConfigModule } from './config/customConfig.module';
import { CustomLoggerModule } from './logger';

@Global()
@Module({
  imports: [CustomConfigModule, CustomLoggerModule],
  exports: [CustomConfigModule, CustomLoggerModule],
})
class InfraModule {}

export { InfraModule };
