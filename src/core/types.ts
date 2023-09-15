type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? `${K & string}${T[K] extends object ? "." : ""}${DeepKeys<T[K]>}`
        : never;
    }[keyof T]
  : "";

export type FieldMapType<FromObjectType, ToObjectType> = [
  DeepKeys<ToObjectType>,
  (a: FromObjectType) => any
];
