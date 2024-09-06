import { ErrorPrefix } from '../../constants';
import { ErrorHandlerException } from './errorHandler.exception';

export class AuthenticationException extends ErrorHandlerException {
  constructor(message: string, data?: unknown) {
    super(message, ErrorPrefix.AUTHENTICATION, data);
  }
}
