import { Injectable } from '@nestjs/common';
import { UpdateCreateDeleteProducersDto } from '../../dto/response/updateCreateDeleteProducer.dto';
import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';

@Injectable()
class DeleteProducerService extends Service {
  constructor(readonly logger: CustomLoggerService) {
    super(logger);
  }

  async execute(id: string): Promise<UpdateCreateDeleteProducersDto> {
    // Deve excluir o producer + farms atreladas a ele
    console.log(id);

    return {
      success: false,
    };
  }
}

export { DeleteProducerService };
