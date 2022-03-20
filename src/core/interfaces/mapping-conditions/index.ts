export type MappingConditions<TSource> = {
  empty?: ((obj: TSource) => any)[];
  notEmpty?: ((obj: TSource) => any)[];
  equals?: ((obj: TSource) => boolean)[];
  notEquals?: ((obj: TSource) => boolean)[];
};
