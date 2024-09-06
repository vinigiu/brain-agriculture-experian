import { Logger } from '@/core/logger';
import { Inject, Injectable, Scope } from '@nestjs/common';
import { Params, PARAMS_PROVIDER_TOKEN, PinoLogger } from 'nestjs-pino';
import pretty from 'pino-pretty';

const stream = pretty({
  colorize: true,
  translateTime: 'SYS: dd/mm/yyyy hh:MM::ss TT',
  levelFirst: true,
  messageFormat: (log, messageKey) => {
    const message: string = log[messageKey] as string;
    delete log.context;
    if (log.req) {
      const id = log.requestId as string;
      return `[${id}] ${message}`;
    }
    return message as string;
  },
});

@Injectable({ scope: Scope.TRANSIENT })
class CustomLoggerService extends PinoLogger implements Logger {
  constructor(@Inject(PARAMS_PROVIDER_TOKEN) params: Params) {
    super(params);
  }

  getMessage(message: unknown) {
    if (this.context) return this.context + ' - ' + message;
    return message;
  }

  log(message: unknown) {
    this.logger.info(this.getMessage(message));
  }

  fatal(message: string) {
    this.logger.fatal(this.getMessage(message));
  }

  error(message: unknown, error: Error | any) {
    this.logger.error({ message: this.getMessage(message), err: error });
  }

  warn(message: unknown) {
    this.logger.warn(this.getMessage(message));
  }

  debug(message: unknown) {
    this.logger.debug(this.getMessage(message));
  }
}

export { stream, CustomLoggerService };
