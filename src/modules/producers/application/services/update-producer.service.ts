import { Inject, Injectable } from '@nestjs/common';
import { UpdateCreateDeleteProducersDto } from '../../dto/response/updateCreateDeleteProducer.dto';
import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';
import { UpdateProducerDto } from '../../dto/request';
import { IProducersRepository } from '../database/repository/producersRepository.interface';
import { ApplicationException } from '@/core/errors/exceptions';
import { HttpErrorMessages } from '@/core/constants';

@Injectable()
class UpdateProducerService extends Service {
  constructor(
    readonly logger: CustomLoggerService,
    @Inject('IProducersRepository')
    private readonly producersRespository: IProducersRepository,
  ) {
    super(logger);
  }

  async execute(
    dto: UpdateProducerDto,
    id: string,
  ): Promise<UpdateCreateDeleteProducersDto> {
    const updatedProducer = await this.producersRespository.update(dto, id);

    if (!updatedProducer)
      throw new ApplicationException(HttpErrorMessages.INTERNAL_SERVER_ERROR);

    return {
      success: !!updatedProducer.id,
    };
  }
}

export { UpdateProducerService };
