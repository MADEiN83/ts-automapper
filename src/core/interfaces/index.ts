export interface IPredicate<TSource, TDestination> {
  sourcePredicate: (obj: TSource) => any;
  destinationPredicate: (obj: TDestination) => any;
  options: AutoMapperOptions;
}

export interface AutoMapperOptions {
  type?: AutoMapperTypes;
  operation?: (value: any) => any;
}

export type AutoMapperTypes = "string" | "number";
