export const UpdateProducerServiceMock = {
  execute: jest.fn((id: string, data) => {
    console.log(id, data);
    return { success: true };
  }),
};
