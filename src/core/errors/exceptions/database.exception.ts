import { ErrorPrefix } from '../../constants';
import { ErrorHandlerException } from './errorHandler.exception';

export class DatabaseException extends ErrorHandlerException {
  constructor(message: string, data?: unknown) {
    super(message, ErrorPrefix.DATABASE, data);
  }
}
