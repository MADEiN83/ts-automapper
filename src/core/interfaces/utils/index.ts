export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export type AnyOfTSource<TSource> = (source: TSource) => any;

export type AnyOfTDestination<TDestination> = (source: TDestination) => any;
