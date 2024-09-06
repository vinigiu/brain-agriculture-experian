import { Injectable } from '@nestjs/common';
import { UpdateCreateDeleteProducersDto } from '../../dto/response/updateCreateDeleteProducer.dto';

@Injectable()
class CreateProducerService {
  async execute(dto: any): Promise<UpdateCreateDeleteProducersDto> {
    // Deve criar o producer + farm atrelando cultures à farm
    console.log(dto);

    return {
      success: false,
    };
  }
}

export { CreateProducerService };
