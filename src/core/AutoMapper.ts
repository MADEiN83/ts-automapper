import { IMappings } from "./interface";
import Mapping from "./Mapping";
import { getKeyFromPredicate, convert } from "../utils";

export default class AutoMapper {
  static TYPES = { STRING: "string", INTEGER: "int", FLOAT: "float" };

  private static mappings: IMappings[] = [];

  /**
   * Creates a mapping definition with an unique key.
   * @param {string} key The unique key to be able to retrieve the mapping.
   * @return {Mapping<TSource, TDestination>} Returns the mapping class.
   */
  static createDefinition = <TSource, TDestination>(
    key: string
  ): Mapping<TSource, TDestination> => {
    const mapping = new Mapping<TSource, TDestination>();
    AutoMapper.mappings.push({ key, mapping });
    return mapping;
  };

  /**
   * Executes a mapping definition with an unique key.
   * @param {TSource} data The object.
   * @param {string} key The unique key to be able to retrieve the mapping.
   * @return {TDestination} Returns a new instance of TDestination.
   */
  static exec = <TSource, TDestination>(
    data: TSource,
    key: string
  ): TDestination => {
    const [mapping] = AutoMapper.mappings.filter(m => m.key === key);

    let result: any = {} as TDestination;
    if (!mapping) return result;

    result = AutoMapper.parseMapping(data, mapping.mapping);
    return result;
  };

  static execAll = <TSource, TDestination>(
    list: TSource[],
    key: string
  ): TDestination[] => {
    const [mapping] = AutoMapper.mappings.filter(m => m.key === key);

    let result: any = {} as TDestination[];
    if (!mapping) return result;

    result = list.map((data: TSource) =>
      AutoMapper.parseMapping(data, mapping.mapping)
    );

    return result;
  };

  private static parseMapping = <TSource, TDestination>(
    data: any,
    mapping: Mapping<TSource, TDestination>
  ): TDestination => {
    let result: any = {} as TDestination;

    mapping.mapsList.forEach(({ src, dst, options }) => {
      const sourceKey = getKeyFromPredicate(src);
      const destinationKey = getKeyFromPredicate(dst);

      let tempValue = data[sourceKey];
      if (options.operation) {
        tempValue = options.operation(tempValue);
      }
      tempValue = convert(tempValue, options.type);

      result[destinationKey] = tempValue;
    });

    return result;
  };
}
