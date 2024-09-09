import { ApiProperty } from '@nestjs/swagger';

class UpdateCreateDeleteProducersDto {
  @ApiProperty({ description: 'Indica se a operação foi bem sucedida' })
  success: boolean;
}

export { UpdateCreateDeleteProducersDto };
