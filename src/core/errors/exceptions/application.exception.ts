import { Injectable } from '@nestjs/common';
import { ErrorPrefix } from '../../constants';
import { ErrorHandlerException } from './errorHandler.exception';

@Injectable()
export class ApplicationException extends ErrorHandlerException {
  constructor(message: string) {
    super(message, ErrorPrefix.APPLICATION);
  }
}
