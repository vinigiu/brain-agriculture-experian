import { ApiProperty } from '@nestjs/swagger';

class UpdateCreateDeleteProducersDto {
  @ApiProperty()
  success: boolean;
}

export { UpdateCreateDeleteProducersDto };
