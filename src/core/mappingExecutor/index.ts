import { Predicate } from "../interfaces";

import {
  execConditions,
  execOperation,
  getValueByPredicate,
  setDeepValueByPredicate,
} from "./mapping-executor.utils";

class MappingExecutor<TSource, TDestination> {
  buildDestinationObject = (
    source: TSource,
    predicates: Predicate<TSource, TDestination>[]
  ): TDestination => {
    const output = {};

    predicates.forEach((aPredicate) => {
      const {
        sourcePredicate,
        destinationPredicate,
        options: {
          type = "string",
          operation = (value: any) => value,
          conditions,
        },
      } = aPredicate;
      const valueRaw = getValueByPredicate(source, sourcePredicate, type);
      const shouldContinue = execConditions(source, conditions);
      const value = shouldContinue
        ? execOperation(valueRaw, operation)
        : undefined;

      setDeepValueByPredicate(output, destinationPredicate, value);
    });

    return output as TDestination;
  };
}

export default MappingExecutor;
