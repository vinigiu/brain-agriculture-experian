import { Global, Module } from '@nestjs/common';
import { CustomConfigModule } from './config/customConfig.module';
import { CustomLoggerModule } from './logger';
import { PrismaModule } from './prisma/prisma.module';

@Global()
@Module({
  imports: [CustomConfigModule, CustomLoggerModule, PrismaModule],
  exports: [CustomConfigModule, CustomLoggerModule, PrismaModule],
})
class InfraModule {}

export { InfraModule };
