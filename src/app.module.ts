import { Module } from '@nestjs/common';
import { ProducersModule } from './modules/producers/producers.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { CulturesModule } from './modules/cultures/cultures.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './infra/config/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    ProducersModule,
    DashboardModule,
    CulturesModule,
  ],
  providers: [],
})
export class AppModule {}
