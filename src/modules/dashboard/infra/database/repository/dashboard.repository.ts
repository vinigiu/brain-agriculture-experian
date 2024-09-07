import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { Farm } from '@prisma/client';
import { IDashboardRepository } from '@/modules/dashboard/application/database/repository/dashboardRepository.interface';
import { CountByState } from '@/core/types';
import { FarmsPerCulture } from '@/modules/dashboard/dto/response';

@Injectable()
class DashboardRepository implements IDashboardRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllPerState(): Promise<CountByState[]> {
    const results = await this.prisma.farm.groupBy({
      by: ['state'],
      _count: {
        id: true,
      },
      orderBy: {
        state: 'asc',
      },
    });

    return results.map((result) => ({
      state: result.state,
      count: result._count.id,
    }));
  }

  async findAllPerCulture(): Promise<Array<FarmsPerCulture>> {
    const cultures = await this.prisma.culture.findMany({
      include: {
        farms: true,
      },
    });

    return cultures.map((culture) => ({
      cultureId: culture.id,
      cultureName: culture.name,
      totalFarms: culture.farms.length,
    }));
  }

  async findAll(): Promise<Array<Farm>> {
    return this.prisma.farm.findMany();
  }
}

export { DashboardRepository };
