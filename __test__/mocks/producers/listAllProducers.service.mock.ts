export const ListAllProducersServiceMock = {
  execute: jest.fn(() => [
      {
        id: '1',
        document: '12345678911',
        name: 'Vinícius Giuseppe',
        farms: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ]),
  };