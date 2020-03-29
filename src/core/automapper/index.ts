import Mapping from "../mapping";

class AutoMapper {
  static mappings: Mapping<any, any>[] = [];

  static create = <TSource, TDestination>(
    key: string
  ): Mapping<TSource, TDestination> => {
    return AutoMapper.createMappingInstance(key);
  };

  static exec = <TSource, TDestination>(
    key: string,
    source: TSource
  ): TDestination => {
    const currentMapping = AutoMapper.mappings.find(p => p.key === key);
    if (!currentMapping) {
      // No mapping found.
      throw new Error("Not found");
    }

    return currentMapping.exec(source);
  };

  static assign = <TSource, TDestination>(
    key: string,
    source: TSource,
    destination: TDestination
  ) => {};

  static reset = () => {
    AutoMapper.mappings = [];
  };

  /*
   * Private methods.
   */
  private static createMappingInstance = (key: string): Mapping<any, any> => {
    const mapping = new Mapping(key);
    AutoMapper.mappings.push(mapping);
    return mapping;
  };
}

export default AutoMapper;
