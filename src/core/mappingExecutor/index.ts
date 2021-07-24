import { getKeysFromPredicate, setDeepValue } from "../../utils";
import { IPredicate, AutoMapperTypes } from "../interfaces";

class MappingExecutor<TSource, TDestination> {
  buildDestinationObject = (
    source: TSource,
    predicates: IPredicate<TSource, TDestination>[]
  ): TDestination => {
    const output = {};

    predicates.forEach((aPredicate) => {
      const {
        sourcePredicate,
        destinationPredicate,
        options: { type = "string", operation = (value: any) => value },
      } = aPredicate;
      const valueRaw = this.getValueByPredicate(source, sourcePredicate, type);
      const value = this.execOperation(valueRaw, operation);

      this.setDeepValueByPredicate(output, destinationPredicate, value);
    });

    return output as TDestination;
  };

  /*
   * Private.
   */
  private setDeepValueByPredicate = (
    output: any,
    predicate: any,
    value: any
  ) => {
    const destinationKeys = getKeysFromPredicate(predicate);
    setDeepValue(output, destinationKeys.join("."), value);
  };

  private getValueByPredicate = (
    source: TSource,
    sourcePredicate: (obj: TSource) => any,
    type: AutoMapperTypes
  ) => {
    const [value] = [source].map(sourcePredicate);
    return this.castValue(value, type);
  };

  private castValue = (value: any, type?: AutoMapperTypes): any => {
    if (!value) {
      return;
    }

    switch (type) {
      case "string":
        return value.toString();
      case "number":
        return Number(value);
      case "date":
        return new Date(value);
    }
  };

  private execOperation = (value: any, operation: (value: any) => any): any => {
    return operation(value);
  };
}

export default MappingExecutor;
