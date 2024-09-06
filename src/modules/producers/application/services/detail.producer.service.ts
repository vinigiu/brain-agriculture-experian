import { Service } from '@/core/service/service';
import { Injectable } from '@nestjs/common';

@Injectable()
class DetailProducerService extends Service {
  async execute(id: string) {
    console.log(id);
  }
}

export { DetailProducerService };
