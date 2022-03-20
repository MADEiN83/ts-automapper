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
    const output = {} as TDestination;

    predicates.forEach((aPredicate) => {
      const {
        sourcePredicate,
        destinationPredicate,
        options: { castTo, operation, onlyIf },
      } = aPredicate;
      const valueRaw = getValueByPredicate(source, sourcePredicate, castTo);
      const shouldContinue = execConditions(source, onlyIf);
      const value = shouldContinue && execOperation(valueRaw, operation);

      setDeepValueByPredicate<TDestination>(
        output,
        destinationPredicate,
        value
      );
    });

    return output;
  };
}

export default MappingExecutor;
