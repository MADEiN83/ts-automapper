import { CastToTypes } from "..";

export type AutoMapperOptions<TSource> = {
  castTo?: CastToTypes;
  transform?: (value: TSource) => any;
  onlyIf?: (value: TSource) => boolean;
};
