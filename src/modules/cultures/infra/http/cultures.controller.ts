import { Controller, Get } from '@nestjs/common';
import { ListAllCulturesService } from '../../application/services';
import { ListAllCulturesResponseDto } from '../../dto/response';

@Controller('cultures')
class CulturesController {
  constructor(
    private readonly listAllCulturesService: ListAllCulturesService,
  ) {}

  @Get()
  async listAll(): Promise<ListAllCulturesResponseDto> {
    return this.listAllCulturesService.execute();
  }
}

export { CulturesController };
