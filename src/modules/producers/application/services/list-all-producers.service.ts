import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';
import { Inject, Injectable } from '@nestjs/common';
import { ListAllProducersDto } from '../../dto/response/listAllProducers.dto';
import { IProducersRepository } from '../database/repository/producersRepository.interface';
import { ApplicationException } from '@/core/errors/exceptions';
import { HttpErrorMessages } from '@/core/constants';

@Injectable()
class ListAllProducersService extends Service {
  constructor(
    readonly logger: CustomLoggerService,
    @Inject('IProducersRepository')
    private readonly producersRespository: IProducersRepository,
  ) {
    super(logger);
  }

  async execute(): Promise<ListAllProducersDto> {
    const producers = await this.producersRespository.findAll();

    if (!producers)
      throw new ApplicationException(HttpErrorMessages.INTERNAL_SERVER_ERROR);
    return {
      producers,
    };
  }
}

export { ListAllProducersService };
