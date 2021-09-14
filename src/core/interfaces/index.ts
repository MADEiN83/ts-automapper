export interface Predicate<TSource, TDestination> {
  sourcePredicate: (obj: TSource) => any;
  destinationPredicate: (obj: TDestination) => any;
  options: AutoMapperOptions<TSource>;
}

export interface AutoMapperOptions<TSource> {
  type?: AutoMapperTypes;
  operation?: (value: any) => any;
  conditions?: MappingConditions<TSource>;
}

export interface MappingConditions<TSource> {
  empty?: ((obj: TSource) => any)[];
  notEmpty?: ((obj: TSource) => any)[];
  equals?: ((obj: TSource) => boolean)[];
  notEquals?: ((obj: TSource) => boolean)[];
}

export type AutoMapperTypes = "string" | "number" | "date";
