import { HttpStatus } from '@nestjs/common';
import { HttpErrorTypes } from '../types';

export const httpError: HttpErrorTypes = {
  NOT_FOUND: {
    id: '001',
    message: 'Not Found',
    statusCode: HttpStatus.NOT_FOUND,
  },
  BAD_REQUEST: {
    id: '002',
    message: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
  },
  INTERNAL_SERVER_ERROR: {
    id: '003',
    message: 'Internal Server Error',
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  },
};
