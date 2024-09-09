export const CreateProducerServiceMock = {
  execute: jest.fn((data) => ({
    id: '1',
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })),
};
