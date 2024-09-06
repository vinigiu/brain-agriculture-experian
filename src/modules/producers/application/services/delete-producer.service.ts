import { Injectable } from '@nestjs/common';
import { UpdateCreateDeleteProducersDto } from '../../dto/response/updateCreateDeleteProducer.dto';
import { Service } from '@/core/service/service';

@Injectable()
class DeleteProducerService extends Service {
  async execute(id: string): Promise<UpdateCreateDeleteProducersDto> {
    // Deve excluir o producer + farms atreladas a ele
    console.log(id);

    return {
      success: false,
    };
  }
}

export { DeleteProducerService };
