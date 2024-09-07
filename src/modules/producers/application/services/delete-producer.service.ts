import { Inject, Injectable } from '@nestjs/common';
import { UpdateCreateDeleteProducersDto } from '../../dto/response/updateCreateDeleteProducer.dto';
import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';
import { IProducersRepository } from '../database/repository/producersRepository.interface';
import { ApplicationException } from '@/core/errors/exceptions';
import { HttpErrorMessages } from '@/core/constants';

@Injectable()
class DeleteProducerService extends Service {
  constructor(
    readonly logger: CustomLoggerService,
    @Inject('IProducersRepository')
    private readonly producersRespository: IProducersRepository,
  ) {
    super(logger);
  }

  async execute(id: string): Promise<UpdateCreateDeleteProducersDto> {
    const data = await this.producersRespository.delete(id);

    if (!data.id)
      throw new ApplicationException(HttpErrorMessages.INTERNAL_SERVER_ERROR);
    return {
      success: !!data.id,
    };
  }
}

export { DeleteProducerService };
