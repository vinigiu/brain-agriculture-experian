import { ErrorPrefix } from '../../constants';
import { ErrorHandlerException } from './errorHandler.exception';

export class ValidationException extends ErrorHandlerException {
  constructor(message: string, data?: unknown) {
    super(message, ErrorPrefix.VALIDATION, data);
  }
}
