import { getKeysFromPredicate, setDeepValue } from "../../utils";
import { AutoMapperTypes, MappingConditions } from "../interfaces";

export const castValue = (value: any = "", type?: AutoMapperTypes): any => {
  switch (type) {
    case "string":
      return value.toString();
    case "number":
      return Number(value);
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
  conditions: MappingConditions<TSource> = {}
): boolean => {
  const { empty = [], notEmpty = [], equals = [], notEquals = [] } = conditions;

  const allIsPassing: boolean[] = [];

  empty.forEach((predicate) => {
    const value = getValueByPredicate(source, predicate, "string");
    allIsPassing.push(value === undefined || value === null || value === "");
  });

  notEmpty.forEach((predicate) => {
    const value = getValueByPredicate(source, predicate, "string");
    allIsPassing.push(value !== undefined || value !== null || value !== "");
  });

  equals.forEach((predicate) => {
    const value = predicate(source);
    allIsPassing.push(value);
  });

  notEquals.forEach((predicate) => {
    const value = predicate(source);
    allIsPassing.push(!value);
  });

  return allIsPassing.every((booleanValue) => booleanValue);
};
