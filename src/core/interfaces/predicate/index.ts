import { AutoMapperOptions } from "..";

export type Predicate<TSource, TDestination> = {
  sourcePredicate: (obj: TSource) => any;
  destinationPredicate: (obj: TDestination) => any;
  options: AutoMapperOptions<TSource>;
};
