import { ApiProperty } from '@nestjs/swagger';

class ErrorInternalServerResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  message: string;

  @ApiProperty({ default: 500 })
  statusCode: string;

  @ApiProperty()
  timestamp: Date;

  @ApiProperty()
  data?: string;
}

export { ErrorInternalServerResponseDto };
