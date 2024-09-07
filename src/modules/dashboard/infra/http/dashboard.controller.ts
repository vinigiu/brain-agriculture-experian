import { Controller, Get } from '@nestjs/common';
import { DashboardDataService } from '../../application/services';
import { GetDashboardDataResponseDto } from '../../dto/response';

@Controller('dashboards')
class DashboardController {
  constructor(private readonly dashboardDataService: DashboardDataService) {}

  @Get()
  async getData(): Promise<GetDashboardDataResponseDto> {
    return this.dashboardDataService.execute();
  }
}

export { DashboardController };
