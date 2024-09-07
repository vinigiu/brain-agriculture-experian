import { httpError } from '@/core/constants';
import { Logger } from '@/core/logger';
import { ErrorHandlerExceptionFilterResponse } from '@/core/types';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
class HettpErrorHandlerFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    const exceptionResponse = exception.getResponse() as Record<string, any>;

    const error = Object.values(httpError).find(
      (error) => error.statusCode === exceptionResponse.statusCode,
    );
    if (error) {
      const responseJson: ErrorHandlerExceptionFilterResponse = {
        id: error.id,
        message: error.message,
        statusCode: error.statusCode,
        timestamp: Date.now().toString(),
      };
      if (process.env.NODE_ENV === 'dev') {
        responseJson.data = exception.stack;
      }
      response.status(error.statusCode).json(responseJson);
      this.logger.warn(`${error.id} - ${exception.stack}`);
    }
  }
}

export { HettpErrorHandlerFilter };
