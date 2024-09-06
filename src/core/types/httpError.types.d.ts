import { HttpStatus } from '@nestjs/common';

export type HttpErrorTypes = {
  [key: string]: {
    id: string;
    message: string;
    statusCode: HttpStatus;
  };
};
