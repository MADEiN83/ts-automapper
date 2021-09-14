import Mapping from "../mapping";
import { instantiateMapping } from "./automapper.utils";

/**
  AutoMapper static class to be able to create mapping definitions.
  @class AutoMapper
*/
class AutoMapper {
  static mappings: Mapping<any, any>[] = [];

  /**
   * Create a mapping definition with an unique key.
   *
   * ```ts
   * import AutoMapper from "ts-automapper";
   * import { ISource, IDestination } = "../path/of/your/interfaces.ts";
   *
   * AutoMapper.create<ISource, IDestination>('UNIQUE_KEY');
   * ```
   *
   * @param {string} key The unique key to be able to retrieve the mapping.
   * @return {Mapping<TSource, TDestination>} Returns the mapping class.
   */
  static create = <TSource, TDestination>(
    key: string
  ): Mapping<TSource, TDestination> => {
    const mapping = instantiateMapping(key);
    AutoMapper.mappings.push(mapping);
    return mapping;
  };

  /**
   * Execute a mapping by its key
   *
   * ```ts
   * import AutoMapper from "ts-automapper";
   * import { ISource, IDestination } = "../path/of/your/interfaces.ts";
   *
   * const input: ISource = {};
   * const output:IDestination = AutoMapper.exec('UNIQUE_KEY', input);
   * ```
   *
   * @param key The unique key to be able to retrieve the mapping.
   * @param source The TSource object
   * @returns The final object
   */
  static exec = <TSource, TDestination>(
    key: string,
    source: TSource
  ): TDestination => {
    const currentMapping = AutoMapper.mappings.find(
      (mapping) => mapping.key === key
    );

    if (!currentMapping) {
      throw new Error(`Mapping configuration was not found for '${key}'`);
    }

    return currentMapping.exec(source);
  };

  /**
   * Clear the list of mappings.
   *
   * ```ts
   * import AutoMapper from "ts-automapper";
   *
   * AutoMapper.clear();
   * ```
   */
  static clear = () => {
    AutoMapper.mappings = [];
  };
}

export default AutoMapper;
