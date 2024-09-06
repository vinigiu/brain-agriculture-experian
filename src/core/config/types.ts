type Leaves<T> = T extends object
  ? {
      [K in keyof T]-?:
        | `${K & string}`
        | (T[K] extends object ? `${K & string}.${Leaves<T[K]>}` : never);
    }[keyof T]
  : never;

type LeafTypes<T, S extends string> = S extends `${infer T1}.${infer T2}`
  ? T1 extends keyof T
    ? T[T1] extends object
      ? LeafTypes<T[T1], T2>
      : never
    : never
  : S extends keyof T
    ? T[S]
    : never;

export { Leaves, LeafTypes };
