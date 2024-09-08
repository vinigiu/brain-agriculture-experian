import { CreateProducerDto } from "../../src/modules/producers/dto/request"

const crateProducerMock: CreateProducerDto = {
    document: '12345678900',
    name: 'Vinícius Guida',
    farms: [{
      name: 'Fazenda Querência',
      city: 'Iracemápolis',
      state: 'SP',
      totalArea: 100,
      cultivableArea: 50,
      vegetationArea: 20,
      cultures: []
    }],
  }

  export { crateProducerMock }