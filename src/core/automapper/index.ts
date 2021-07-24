import Mapping from "../mapping";

/**
  AutoMapper static class to be able to create mapping definitions.
  @class AutoMapper
*/
class AutoMapper {
  static mappings: Mapping<any, any>[] = [];

  /**
   * Creates a mapping definition with an unique key.
   *
   * ```ts
   * import AutoMapper from "ts-automapper";
   * import { ISource, IDestination } = "../path/of/your/interfaces.ts";
   *
   * AutoMapper.createDefinition<ISource, IDestination>('UNIQUE_KEY');
   * ```
   *
   * @param {string} key The unique key to be able to retrieve the mapping.
   * @return {Mapping<TSource, TDestination>} Returns the mapping class.
   */

  static create = <TSource, TDestination>(
    key: string
  ): Mapping<TSource, TDestination> => {
    return AutoMapper.createMappingInstance(key);
  };

  static exec = <TSource, TDestination>(
    key: string,
    source: TSource
  ): TDestination => {
    const currentMapping = AutoMapper.mappings.find((p) => p.key === key);
    if (!currentMapping) {
      // No mapping found.
      throw new Error(`Mapping configuration was not found for '${key}'`);
    }

    return currentMapping.exec(source);
  };

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
