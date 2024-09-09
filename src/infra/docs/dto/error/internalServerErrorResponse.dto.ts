import { ApiProperty } from '@nestjs/swagger';

class ErrorInternalServerResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  message: string;

  @ApiProperty({ default: 500 })
  statusCode: number;

  @ApiProperty()
  timestamp: Date;

  @ApiProperty()
  data?: string;
}

export { ErrorInternalServerResponseDto };
