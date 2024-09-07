import { Injectable } from '@nestjs/common';
import { UpdateCreateDeleteProducersDto } from '../../dto/response/updateCreateDeleteProducer.dto';
import { Service } from '@/core/service/service';
import { CustomLoggerService } from '@/infra/logger';
import { UpdateProducerDto } from '../../dto/request';

@Injectable()
class UpdateProducerService extends Service {
  constructor(readonly logger: CustomLoggerService) {
    super(logger);
  }

  async execute(
    dto: UpdateProducerDto,
  ): Promise<UpdateCreateDeleteProducersDto> {
    // Deve alterar o producer + farm atrelando cultures à farm
    console.log(dto);

    return {
      success: false,
    };
  }
}

export { UpdateProducerService };
