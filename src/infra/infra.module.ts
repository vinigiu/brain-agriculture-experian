import { Global, Module } from '@nestjs/common';
import { CustomConfigModule } from './config/customConfig.module';

@Global()
@Module({
  imports: [CustomConfigModule],
  exports: [CustomConfigModule],
})
class InfraModule {}

export { InfraModule };
