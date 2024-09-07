import { Inject, Injectable } from '@nestjs/common';
import { ListAllCulturesResponseDto } from '../../dto/response';
import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';
import { ICulturesRepository } from '../database/repository/culturesRepository.interface';

@Injectable()
class ListAllCulturesService extends Service {
  constructor(
    readonly logger: CustomLoggerService,
    @Inject('ICulturesRepository')
    private readonly culturesRespository: ICulturesRepository,
  ) {
    super(logger);
  }

  async execute(): Promise<ListAllCulturesResponseDto> {
    return {
      cultures: await this.culturesRespository.findAll(),
    };
  }
}

export { ListAllCulturesService };
