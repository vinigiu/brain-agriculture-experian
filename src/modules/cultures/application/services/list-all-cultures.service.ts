import { Injectable } from '@nestjs/common';
import { ListAllCulturesResponseDto } from '../../dto/response';
import { Service } from '@/core/service/service';

@Injectable()
class ListAllCulturesService extends Service {
  async execute(): Promise<ListAllCulturesResponseDto> {
    return {
      cultures: [],
    };
  }
}

export { ListAllCulturesService };
