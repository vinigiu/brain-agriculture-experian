import { Injectable } from '@nestjs/common';
import { UpdateCreateDeleteProducersDto } from '../../dto/response/updateCreateDeleteProducer.dto';
import { Service } from '@/core/service/service';

@Injectable()
class UpdateProducerService extends Service {
  async execute(dto: any): Promise<UpdateCreateDeleteProducersDto> {
    // Deve alterar o producer + farm atrelando cultures à farm
    console.log(dto);

    return {
      success: false,
    };
  }
}

export { UpdateProducerService };
