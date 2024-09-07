import { Injectable } from '@nestjs/common';
import { ListAllCulturesResponseDto } from '../../dto/response';
import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';

@Injectable()
class ListAllCulturesService extends Service {
  constructor(readonly logger: CustomLoggerService) {
    super(logger);
  }

  async execute(): Promise<ListAllCulturesResponseDto> {
    return {
      cultures: [],
    };
  }
}

export { ListAllCulturesService };
