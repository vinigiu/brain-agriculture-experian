import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { Prisma, Producer } from '@prisma/client';
import { IProducersRepository } from '@/modules/producers/application/database/repository/producersRepository.interface';
import {
  CreateProducerDto,
  UpdateProducerDto,
} from '@/modules/producers/dto/request';

@Injectable()
class ProducersRepository implements IProducersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProducerDto): Promise<Producer> {
    return this.prisma.producer.create({
      data: {
        name: data.name,
        document: data.document,
        farms: {
          create: data.farms.map((farm) => ({
            name: farm.name,
            city: farm.city,
            state: farm.state,
            cultivableArea: farm.cultivableArea,
            totalArea: farm.totalArea,
            vegetationArea: farm.vegetationArea,
            cultures: {
              connect: farm.cultures.map((culture) => ({ id: culture.id })),
            },
          })),
        },
      },
      include: {
        farms: {
          include: {
            cultures: true,
          },
        },
      },
    });
  }

  async findAll(): Promise<Array<Producer>> {
    return this.prisma.producer.findMany();
  }

  async findById(id: string): Promise<
    Prisma.ProducerGetPayload<{
      include: {
        farms: {
          include: {
            cultures: true;
          };
        };
      };
    }>
  > {
    return this.prisma.producer.findUnique({
      where: { id },
      include: {
        farms: {
          include: {
            cultures: true,
          },
        },
      },
    });
  }

  async delete(id: string): Promise<{ id: string }> {
    let deletedProducer;
    await this.prisma.$transaction(async (prisma) => {
      const farms = await prisma.farm.findMany({
        where: { producerId: id },
        include: { cultures: true },
      });

      const farmIdsToDelete = farms.map((farm) => farm.id);

      const cultureIds = new Set(
        farms.flatMap((farm) => farm.cultures.map((culture) => culture.id)),
      );

      await Promise.all(
        Array.from(cultureIds).map((cultureId) =>
          prisma.culture.update({
            where: { id: cultureId },
            data: {
              farms: {
                disconnect: farms.map((farm) => ({ id: farm.id })),
              },
            },
          }),
        ),
      );

      await prisma.farm.deleteMany({
        where: { id: { in: farmIdsToDelete } },
      });

      deletedProducer = await prisma.producer.delete({
        where: { id: id },
      });
    });

    return { id: deletedProducer.id };
  }

  async update(data: UpdateProducerDto, id: string): Promise<Producer> {
    const producerData = {};

    if (data.name) Object.assign(producerData, { name: data.name });
    if (data.document) Object.assign(producerData, { document: data.document });

    const updatedProducer = await this.prisma.producer.update({
      data: producerData,
      where: {
        id,
      },
      include: {
        farms: true,
      },
    });

    for (const actualFarm of updatedProducer.farms) {
      if (Array.isArray(data.farms)) {
        for (const updatingFarmData of data.farms) {
          if (actualFarm.id === updatingFarmData.id) {
            const farmsData = {};

            if (updatingFarmData.city)
              Object.assign(farmsData, { city: updatingFarmData.city });
            if (updatingFarmData.name)
              Object.assign(farmsData, { name: updatingFarmData.name });
            if (updatingFarmData.state)
              Object.assign(farmsData, { state: updatingFarmData.state });
            if (updatingFarmData.cultivableArea)
              Object.assign(farmsData, {
                cultivableArea: updatingFarmData.cultivableArea,
              });
            if (updatingFarmData.totalArea)
              Object.assign(farmsData, {
                totalArea: updatingFarmData.totalArea,
              });
            if (updatingFarmData.vegetationArea)
              Object.assign(farmsData, {
                vegetationArea: updatingFarmData.vegetationArea,
              });
            if (Object.keys(farmsData).length === 0)
              await this.prisma.farm.update({
                where: { id: updatingFarmData.id },
                data: farmsData,
              });
          }
        }
      }
    }

    return updatedProducer;
  }
}

export { ProducersRepository };
