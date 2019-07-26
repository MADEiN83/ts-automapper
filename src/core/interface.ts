import Mapping from "./Mapping";

export interface IMappings {
  key: string;
  mapping: Mapping<any, any>;
}

export interface IMappingOptions {
  type?: string;
  operation?: Function;
}
