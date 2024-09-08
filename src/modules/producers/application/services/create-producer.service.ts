import { Inject, Injectable } from '@nestjs/common';
import { UpdateCreateDeleteProducersDto } from '../../dto/response/updateCreateDeleteProducer.dto';
import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';
import { CreateProducerDto } from '../../dto/request';
import { IProducersRepository } from '../database/repository/producersRepository.interface';
import { ApplicationException } from '@/core/errors/exceptions';
import { HttpErrorMessages } from '@/core/constants';
import { isAreasValid } from '@/core/utils/verifyAreasRule';

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
    for (const farm of dto.farms) {
      const isValid = isAreasValid({
        cultivableArea: farm.cultivableArea,
        totalArea: farm.totalArea,
        vegetationArea: farm.vegetationArea,
      });

      if (!isValid)
        throw new ApplicationException(HttpErrorMessages.BAD_REQUEST_AREAS);
    }

    const createdUser = await this.producersRespository.create(dto);

    if (!createdUser)
      throw new ApplicationException(HttpErrorMessages.INTERNAL_SERVER_ERROR);

    return {
      success: !!createdUser.id,
    };
  }
}

export { CreateProducerService };
