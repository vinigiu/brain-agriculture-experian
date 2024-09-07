import { Module } from '@nestjs/common';
import { CustomLoggerService, stream } from './logger.service';
import { Logger } from '@/core/logger';
import { CustomConfigModule } from '../config/customConfig.module';
import { Config } from '@/core/config';
import { LoggerModule } from 'nestjs-pino';
import { randomUUID } from 'crypto';
import { Env } from '../config';

@Module({
  providers: [{ useClass: CustomLoggerService, provide: Logger }],
  exports: [Logger],
  imports: [
    LoggerModule.forRootAsync({
      imports: [CustomConfigModule],
      inject: [Config],
      useFactory: (config: Config<Env>) => {
        const env = config.get('NODE_ENV');
        return {
          pinoHttp: {
            stream: env !== 'production' ? stream : undefined,
            customSuccessMessage(req) {
              return `Request ${req.method}: ${req.url?.split('?')[0]} succeded`;
            },
            customSErrorMessage(req) {
              return `Request ${req.method}: ${req.url?.spilt('?')[0]} succeded`;
            },
            customLogLever(_req, res) {
              return res.err ? 'warn' : 'info';
            },
            redact: ['res', 'req'],
            genReqId: () => randomUUID(),
            customProps(req) {
              return { requestId: req.id };
            },
          },
        };
      },
    }),
  ],
})
class CustomLoggerModule {}

export { CustomLoggerModule };
