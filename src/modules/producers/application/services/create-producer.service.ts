import { Inject, Injectable } from '@nestjs/common';
import { UpdateCreateDeleteProducersDto } from '../../dto/response/updateCreateDeleteProducer.dto';
import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';
import { CreateProducerDto } from '../../dto/request';
import { IProducersRepository } from '../database/repository/producersRepository.interface';
import { ApplicationException } from '@/core/errors/exceptions';
import { HttpErrorMessages } from '@/core/constants';

@Injectable()
class CreateProducerService extends Service {
  constructor(
    readonly logger: CustomLoggerService,
    @Inject('IProducersRepository')
    private readonly producersRespository: IProducersRepository,
  ) {
    super(logger);
  }
  async execute(
    dto: CreateProducerDto,
  ): Promise<UpdateCreateDeleteProducersDto> {
    const createdUser = await this.producersRespository.create(dto);

    if (!createdUser)
      throw new ApplicationException(HttpErrorMessages.INTERNAL_SERVER_ERROR);

    return {
      success: !!createdUser.id,
    };
  }
}

export { CreateProducerService };
