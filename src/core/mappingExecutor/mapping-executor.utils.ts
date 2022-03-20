import { AnyOfTDestination } from "core/interfaces/utils";
import { getKeysFromPredicate, setDeepValue } from "../../utils";
import {
  AnyOfTSource,
  AutoMapperOptions,
  CastToTypes,
  PropType,
} from "../interfaces";

export const castValue = (value: any, type?: CastToTypes): any => {
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
    default:
      return value;
  }
};

export const getValueByPredicate = <TSource>(
  source: TSource,
  sourcePredicate: AnyOfTSource<TSource>,
  type?: CastToTypes
) => {
  const [value] = [source].map(sourcePredicate);
  return castValue(value, type);
};

export const setDeepValueByPredicate = <TDestination>(
  output: TDestination,
  predicate: AnyOfTDestination<TDestination>,
  value: any
) => {
  const destinationKeys = getKeysFromPredicate(predicate);
  setDeepValue(output, destinationKeys.join("."), value);
};

export const execOperation = (
  value: any,
  operation?: (value: any) => any
): any => {
  return operation?.(value) || value;
};

export const execConditions = <TSource>(
  source: TSource,
  onlyIf: PropType<AutoMapperOptions<TSource>, "onlyIf">
): boolean => {
  return onlyIf?.(source) || true;
};
