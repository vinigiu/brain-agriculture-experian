import { CountByState } from '@/core/types';
import { FarmsPerCulture } from '@/modules/dashboard/dto/response';
import { Farm } from '@prisma/client';

interface IDashboardRepository {
  findAllPerState(): Promise<CountByState[]>;

  findAllPerCulture(): Promise<Array<FarmsPerCulture>>;

  findAll(): Promise<Array<Farm>>;
}

export { IDashboardRepository };
