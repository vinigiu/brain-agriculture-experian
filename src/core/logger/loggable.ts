import { Logger } from './logger';

abstract class Loggable {
  constructor(protected readonly logger: Logger) {
    const name = this.constructor.name;
    this.logger.setContext(name);
  }
}

export { Loggable };
