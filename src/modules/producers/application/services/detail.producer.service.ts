import { Injectable } from '@nestjs/common';

@Injectable()
class DetailProducerService {
  async execute(id: string) {
    console.log(id);
  }
}

export { DetailProducerService };
