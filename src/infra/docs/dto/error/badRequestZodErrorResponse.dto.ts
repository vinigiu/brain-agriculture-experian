import { ApiProperty } from '@nestjs/swagger';

class ErrorZodIssues {
  @ApiProperty()
  code: string;

  @ApiProperty()
  message?: string;

  @ApiProperty()
  expected?: string;

  @ApiProperty()
  received?: string;

  @ApiProperty()
  path: string;
}

class ErrorZodData {
  @ApiProperty({ type: ErrorZodIssues })
  issues: ErrorZodIssues;

  @ApiProperty()
  name: string;
}

class ErrorBadRequestZodResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ default: 'Error validating fields' })
  message: string;

  @ApiProperty({ default: 400 })
  statusCode: string;

  @ApiProperty()
  timestamp: Date;

  @ApiProperty()
  data: ErrorZodData;
}

export { ErrorBadRequestZodResponseDto };
