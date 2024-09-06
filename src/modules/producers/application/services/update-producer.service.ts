import { Injectable } from '@nestjs/common';
import { UpdateCreateDeleteProducersDto } from '../../dto/response/updateCreateDeleteProducer.dto';

@Injectable()
class UpdateProducerService {
  async execute(dto: any): Promise<UpdateCreateDeleteProducersDto> {
    // Deve alterar o producer + farm atrelando cultures à farm
    console.log(dto);

    return {
      success: false,
    };
  }
}

export { UpdateProducerService };
