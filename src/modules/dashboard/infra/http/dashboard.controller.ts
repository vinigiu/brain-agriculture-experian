import { Controller, Get } from '@nestjs/common';
import { DashboardDataService } from '../../application/services';
import { GetDashboardDataResponseDto } from '../../dto/response';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { ErrorInternalServerResponseDto } from '@/infra/docs/dto/error';

@Controller('dashboards')
class DashboardController {
  constructor(private readonly dashboardDataService: DashboardDataService) {}

  @Get()
  @ApiOperation({ summary: 'Dados para a construção dos dashboards' })
  @ApiOkResponse({ type: GetDashboardDataResponseDto })
  @ApiInternalServerErrorResponse({ type: ErrorInternalServerResponseDto })
  async getData(): Promise<GetDashboardDataResponseDto> {
    return this.dashboardDataService.execute();
  }
}

export { DashboardController };
