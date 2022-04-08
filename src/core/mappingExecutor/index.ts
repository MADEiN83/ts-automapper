import { Predicate } from "../interfaces";
import {
  execConditions,
  execTransform,
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
        options: { castTo, transform, onlyIf },
      } = aPredicate;

      let value: any;

      const shouldContinue = execConditions(source, onlyIf);

      if (shouldContinue) {
        value = transform
          ? execTransform(source, transform, castTo)
          : getValueByPredicate(source, sourcePredicate, castTo);
      }

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
