import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';
import { Inject, Injectable } from '@nestjs/common';
import { DetailProducersDto } from '../../dto/response/detailProducer.dto';
import { IProducersRepository } from '../database/repository/producersRepository.interface';
import { HttpErrorMessages } from '@/core/constants';
import { ApplicationException } from '@/core/errors/exceptions';

@Injectable()
class DetailProducerService extends Service {
  constructor(
    readonly logger: CustomLoggerService,
    @Inject('IProducersRepository')
    private readonly producersRespository: IProducersRepository,
  ) {
    super(logger);
  }

  async execute(id: string): Promise<DetailProducersDto> {
    const producer = await this.producersRespository.findById(id);

    if (!producer)
      throw new ApplicationException(HttpErrorMessages.INTERNAL_SERVER_ERROR);

    return producer;
  }
}

export { DetailProducerService };
