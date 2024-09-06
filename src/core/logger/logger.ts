abstract class Logger {
  abstract getMessage(message: unknown): void;
  abstract log(message: unknown): void;
  abstract fatal(message: unknown): void;
  abstract error(message: unknown, error: Error | any): void;
  abstract warn(message: unknown): void;
  abstract debug(message: unknown): void;
  abstract setContext(mvalue: string): void;
}

export { Logger };
