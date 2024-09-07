import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { ErrorHandlerException } from '../exceptions';
import { ErrorHandlerExceptionFilterResponse } from '@/core/types';
// import { LoggerCustomService } from '../../../infra/logger/logger.service';
import { ConfigService } from '@nestjs/config';

@Catch(ErrorHandlerException)
export class ErrorHandlerFilter implements ExceptionFilter {
  constructor(
    private configService: ConfigService,
    // private readonly logger: LoggerCustomService,
  ) {}

  catch(exception: ErrorHandlerException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    const status = exception.status;

    const responseJson: ErrorHandlerExceptionFilterResponse = {
      id: exception.id,
      message: exception.messageTreated,
      statusCode: status,
      timestamp: exception.timestamp,
    };

    if (this.configService.get<string>('NODE_ENV') === 'development') {
      responseJson.data = exception.data;
    }

    response.status(status).json(responseJson);

    // this.logger.warn(`${exception.id} - ${exception.messageTreated}`);
  }
}
