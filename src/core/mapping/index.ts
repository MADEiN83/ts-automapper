import MappingExecutor from "../mappingExecutor";
import { IPredicate, IMappingOptions } from "../interfaces";

class Mapping<TSource, TDestination> {
  readonly predicates: IPredicate<TSource, TDestination>[] = [];
  private executor: MappingExecutor<TSource, TDestination>;
  key: string;

  constructor(key: string) {
    this.key = key;
    this.executor = new MappingExecutor();
  }

  map = (
    sourcePredicate: (obj: TSource) => any,
    destinationPredicate: (obj: TDestination) => any,
    options: IMappingOptions = {}
  ) => {
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

  assign = (source: TSource, destination: TDestination) => {
    return { oui: "non" };
  };
}

export default Mapping;
