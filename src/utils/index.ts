import AutoMapper from "../core/AutoMapper";

export const getKeyFromPredicate = <TSource>(
  predicate: (object: TSource) => any
): string => {
  const key = /\.([^\.;]+);?\s*\}$/.exec(predicate.toString());
  return key && key.length !== 0 ? key[1] : "";
};

export const convert = (
  data: any,
  type: string | null = AutoMapper.TYPES.STRING
) => {
  switch (type) {
    default:
    case AutoMapper.TYPES.STRING:
      return data.toString();
    case AutoMapper.TYPES.INTEGER:
      return Number(data) || 0;
  }
};
