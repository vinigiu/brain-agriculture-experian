import { CreateProducerDto } from "../../../src/modules/producers/dto/request"

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
      cultures: [{
        id: '472387rh28-2i3rug827gr-o2ch3r92h',
        name: 'Milho'
      }]
    }],
  }

  export { crateProducerMock }