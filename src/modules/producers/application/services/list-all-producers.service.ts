import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';
import { Injectable } from '@nestjs/common';
import { ListAllProducersDto } from '../../dto/response/listAllProducers.dto';

@Injectable()
class ListAllProducersService extends Service {
  constructor(readonly logger: CustomLoggerService) {
    super(logger);
  }

  async execute(): Promise<ListAllProducersDto> {
    return {
      producers: [],
    };
  }
}

export { ListAllProducersService };
