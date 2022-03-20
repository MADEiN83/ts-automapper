import { AutoMapperTypes, MappingConditions } from "..";

export type AutoMapperOptions<TSource> = {
  type?: AutoMapperTypes;
  operation?: (value: any) => any;
  onlyIf?: (value: TSource) => boolean;
};
