import { Injectable } from '@nestjs/common';
import { ListAllCulturesResponseDto } from '../../dto/response';

@Injectable()
class ListAllCulturesService {
  async execute(): Promise<ListAllCulturesResponseDto> {
    return {
      cultures: [],
    };
  }
}

export { ListAllCulturesService };
