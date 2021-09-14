import MappingExecutor from "../mappingExecutor";
import { Predicate, AutoMapperOptions } from "../interfaces";

class Mapping<TSource, TDestination> {
  readonly predicates: Predicate<TSource, TDestination>[] = [];
  private executor: MappingExecutor<TSource, TDestination>;
  key: string;

  constructor(key: string) {
    this.key = key;
    this.executor = new MappingExecutor();
  }

  map = (
    sourcePredicate: (obj: TSource) => any,
    destinationPredicate: (obj: TDestination) => any,
    options: AutoMapperOptions = {}
  ): Mapping<TSource, TDestination> => {
    this.predicates.push({ sourcePredicate, destinationPredicate, options });
    return this;
  };

  exec = (source: TSource): TDestination => {
    const output = this.executor.buildDestinationObject(
      source,
      this.predicates
    );
    return output;
  };
}

export default Mapping;
