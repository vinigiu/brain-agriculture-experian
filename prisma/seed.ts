import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  const producer = await prismaClient.producer.create({
    data: {
      document: '12345678900',
      name: 'João da Silva',
    },
  });

  console.log('Producer created: ', producer.id);

  const cultureSoy = await prismaClient.culture.create({
    data: {
      name: 'Soja',
    },
  });

  console.log('Culture created: ', cultureSoy.id);

  const cultureCorn = await prismaClient.culture.create({
    data: {
      name: 'Milho',
    },
  });

  console.log('Culture created: ', cultureCorn.id);

  const cultureCotton = await prismaClient.culture.create({
    data: {
      name: 'Algodão',
    },
  });

  console.log('Culture created: ', cultureCotton.id);

  const cultureCoffee = await prismaClient.culture.create({
    data: {
      name: 'Café',
    },
  });

  console.log('Culture created: ', cultureCoffee.id);

  const cultureSugarCane = await prismaClient.culture.create({
    data: {
      name: 'Cana de Açúcar',
    },
  });

  console.log('Culture created: ', cultureSugarCane.id);

  const farms = await prismaClient.farm.create({
    data: {
      name: 'Fazenda Alto da Boa Vista',
      city: 'São José dos Pinhais',
      state: 'PR',
      cultivableArea: 100,
      totalArea: 200,
      vegetationArea: 50,
      producerId: producer.id,
      cultures: {
        connect: [
          { id: cultureSoy.id },
          { id: cultureCoffee.id },
          { id: cultureCorn.id },
          { id: cultureCotton.id },
          { id: cultureSugarCane.id },
        ],
      },
    },
  });

  console.log('Farm created: ', farms.id);

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
