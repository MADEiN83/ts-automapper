import { getKeysFromPredicate, setDeepValue } from "../../utils";
import {
  AutoMapperOptions,
  AutoMapperTypes,
  MappingConditions,
  PropType,
} from "../interfaces";

export const castValue = (value: any, type?: AutoMapperTypes): any => {
  if (!value) {
    return;
  }

  switch (type) {
    case "string":
      return value.toString();
    case "number":
      return +value;
    case "date":
      return new Date(value);
  }
};

export const getValueByPredicate = <TSource>(
  source: TSource,
  sourcePredicate: (obj: TSource) => any,
  type: AutoMapperTypes
) => {
  const [value] = [source].map(sourcePredicate);
  return castValue(value, type);
};

export const setDeepValueByPredicate = (
  output: any,
  predicate: any,
  value: any
) => {
  const destinationKeys = getKeysFromPredicate(predicate);
  setDeepValue(output, destinationKeys.join("."), value);
};

export const execOperation = (
  value: any,
  operation: (value: any) => any
): any => {
  return operation(value);
};

export const execConditions = <TSource>(
  source: TSource,
  onlyIf: PropType<AutoMapperOptions<TSource>, "onlyIf">
): boolean => {
  return onlyIf?.(source) || true;
};
