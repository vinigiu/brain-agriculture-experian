import { Injectable } from '@nestjs/common';
import { Env } from './types';
import { Config, LeafTypes, Leaves } from '@/core/config';
import { ConfigService } from '@nestjs/config';

@Injectable()
class CustomConfigService implements Config<Env> {
  constructor(private configService: ConfigService) {}

  get<T extends Leaves<Env>>(propertyPath: T): LeafTypes<Env, T> {
    return this.configService.get(propertyPath);
  }
}

export { CustomConfigService };
