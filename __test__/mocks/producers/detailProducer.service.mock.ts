export const DetailProducerServiceMock = {
    execute: jest.fn((id: string) => ({
        id,
        document: '12345678911',
        name: 'Vinícius Giuseppe',
        farms: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })),
  };