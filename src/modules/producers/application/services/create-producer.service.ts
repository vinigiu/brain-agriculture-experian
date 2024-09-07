import { Injectable } from '@nestjs/common';
import { UpdateCreateDeleteProducersDto } from '../../dto/response/updateCreateDeleteProducer.dto';
import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';
import { CreateProducerDto } from '../../dto/request';

@Injectable()
class CreateProducerService extends Service {
  constructor(readonly logger: CustomLoggerService) {
    super(logger);
  }
  async execute(
    dto: CreateProducerDto,
  ): Promise<UpdateCreateDeleteProducersDto> {
    // Deve criar o producer + farm atrelando cultures à farm
    console.log(dto);

    return {
      success: false,
    };
  }
}

export { CreateProducerService };
