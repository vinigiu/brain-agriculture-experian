import { Controller, Get } from '@nestjs/common';
import { ListAllCulturesService } from '../../application/services';
import { ListAllCulturesResponseDto } from '../../dto/response';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiProperty,
} from '@nestjs/swagger';
import { ErrorInternalServerResponseDto } from '@/infra/docs/dto/error';

@Controller('cultures')
class CulturesController {
  constructor(
    private readonly listAllCulturesService: ListAllCulturesService,
  ) {}

  @Get()
  @ApiProperty({ description: 'Lista das culturas registradas no sistema' })
  @ApiOkResponse({ type: ListAllCulturesResponseDto })
  @ApiInternalServerErrorResponse({ type: ErrorInternalServerResponseDto })
  async listAll(): Promise<ListAllCulturesResponseDto> {
    return this.listAllCulturesService.execute();
  }
}

export { CulturesController };
