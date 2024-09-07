import { Injectable } from '@nestjs/common';
import { ICulturesRepository } from '../../application/database/repository/culturesRepository.interface';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { Culture } from '@prisma/client';

@Injectable()
class CulturesRepository implements ICulturesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Array<Culture>> {
    return this.prisma.culture.findMany();
  }
}

export { CulturesRepository };
