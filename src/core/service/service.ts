import { Loggable, Logger } from '../logger';

abstract class Service extends Loggable {
  public abstract execute(...args: Array<unknown>): Promise<unknown>;

  constructor(protected readonly logger: Logger) {
    super(logger);
  }
}

export { Service };
