import { ApiProperty } from '@nestjs/swagger';
import { Producer } from '@prisma/client';
import { ProducerDto } from '../producer.dto';

class ListAllProducersDto {
  @ApiProperty({
    description: 'Listagem de produtores',
    isArray: true,
    type: ProducerDto,
  })
  producers: Array<Producer>;
}

export { ListAllProducersDto };
