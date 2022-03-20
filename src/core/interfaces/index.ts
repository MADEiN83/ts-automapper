import { AutoMapperTypes } from "./automapper-types";
import { MappingConditions } from "./mapping-conditions";
import { AutoMapperOptions } from "./automapper-options";
import { Predicate } from "./predicate";

export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export { AutoMapperTypes, MappingConditions, AutoMapperOptions, Predicate };
