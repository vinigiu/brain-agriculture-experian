import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';
import { Injectable } from '@nestjs/common';
import { DetailProducersDto } from '../../dto/response/detailProducer.dto';

@Injectable()
class DetailProducerService extends Service {
  constructor(readonly logger: CustomLoggerService) {
    super(logger);
  }

  async execute(id: string): Promise<DetailProducersDto> {
    console.log(id);
    return {
      id: '',
      name: '',
      document: '',
      farms: [],
      createdAt: '',
      updatedAt: '',
    };
  }
}

export { DetailProducerService };
