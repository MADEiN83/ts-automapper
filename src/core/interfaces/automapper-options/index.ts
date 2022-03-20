import { CastToTypes } from "..";

export type AutoMapperOptions<TSource> = {
  castTo?: CastToTypes;
  operation?: (value: any) => any;
  onlyIf?: (value: TSource) => boolean;
};
