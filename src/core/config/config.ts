import { LeafTypes, Leaves } from './types';

abstract class Config<E> {
  abstract get<T extends Leaves<E>>(propertyPath: T): LeafTypes<E, T>;
}

export { Config };
