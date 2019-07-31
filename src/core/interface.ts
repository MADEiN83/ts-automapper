import Mapping from "./Mapping";

export interface IMappings {
  /** Unique key for the mapping definition. */
  key: string;
  /** The mapping definition. */
  mapping: Mapping<any, any>;
}

export interface IMappingOptions<TSource> {
  /** Property type */
  type?: string;
  /** Perform an operation on property. */
  operation?: (data: any) => any;
  /** Perform a conditional operation and stop process if returns false. */
  condition?: (data: TSource) => boolean | undefined;
  /** Default value if no value was provided */
  default?: any;
}
