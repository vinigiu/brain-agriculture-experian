export const DeleteProducerServiceMock = {
  execute: jest.fn((id: string) => {
    console.log(id);
    return { success: true };
  }),
};
