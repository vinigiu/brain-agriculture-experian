import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env';
import { CustomConfigService } from './customConfig.service';
import { Config } from '@/core/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
      validate: (env) => envSchema.parse(env),
    }),
  ],
  providers: [{ useClass: CustomConfigService, provide: Config }],
  exports: [Config],
})
class CustomConfigModule {}

export { CustomConfigModule };
