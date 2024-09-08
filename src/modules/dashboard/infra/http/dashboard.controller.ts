import { Controller, Get } from '@nestjs/common';
import { DashboardDataService } from '../../application/services';
import { GetDashboardDataResponseDto } from '../../dto/response';
import { ApiInternalServerErrorResponse, ApiOkResponse } from '@nestjs/swagger';
import { ErrorInternalServerResponseDto } from '@/infra/docs/dto/error';

@Controller('dashboards')
class DashboardController {
  constructor(private readonly dashboardDataService: DashboardDataService) {}

  @Get()
  @ApiOkResponse({ type: GetDashboardDataResponseDto })
  @ApiInternalServerErrorResponse({ type: ErrorInternalServerResponseDto })
  async getData(): Promise<GetDashboardDataResponseDto> {
    return this.dashboardDataService.execute();
  }
}

export { DashboardController };
