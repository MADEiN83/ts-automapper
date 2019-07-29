import { IMappings } from "./interface";
import Mapping from "./Mapping";
import { getKeysFromPredicate, convert, setValueByKeys } from "../utils";

export default class AutoMapper {
  static TYPES = { STRING: "string", INTEGER: "int", FLOAT: "float" };

  private static mappingsList: IMappings[] = [];

  /**
   * Creates a mapping definition with an unique key.
   * @param {string} key The unique key to be able to retrieve the mapping.
   * @return {Mapping<TSource, TDestination>} Returns the mapping class.
   */
  static createDefinition = <TSource, TDestination>(
    key: string
  ): Mapping<TSource, TDestination> => {
    const mapping = new Mapping<TSource, TDestination>();
    AutoMapper.mappingsList.push({ key, mapping });
    return mapping;
  };

  /**
   * Executes a mapping definition with an unique key.
   * @param {TSource} data The source object.
   * @param {string} key The unique key to be able to retrieve the mapping.
   * @return {TDestination} Returns a new instance of TDestination.
   */
  static exec = <TSource, TDestination>(
    source: TSource,
    key: string
  ): TDestination => {
    const [mappingElement] = AutoMapper.mappingsList.filter(m => m.key === key);

    let result: any = {} as TDestination;
    if (!mappingElement) return result;

    result = AutoMapper.parseMapping(source, mappingElement.mapping);
    return result;
  };

  /**
   * Executes a mapping definition with an unique key.
   * @param {TSource[]} list The list of source objects.
   * @param {string} key The unique key to be able to retrieve the mapping.
   * @return {TDestination[]} Returns a list of TDestination.
   */
  static execAll = <TSource, TDestination>(
    list: TSource[],
    key: string
  ): TDestination[] => {
    const [mappingElement] = AutoMapper.mappingsList.filter(m => m.key === key);

    let result: any = {} as TDestination[];
    if (!mappingElement) return result;

    result = list.map((data: TSource) =>
      AutoMapper.parseMapping(data, mappingElement.mapping)
    );

    return result;
  };

  /**
   * Executes a mapping definition with an unique key and assign previously created TDestination object.
   * @param {TSource} source The source objects.
   * @param {TDestination} destination The object that will be injected by TSource value(s).
   * @param {string} key The unique key to be able to retrieve the mapping.
   * @return {TDestination[]} Returns the destination object after update.
   */
  static assign = <TSource, TDestination>(
    source: TSource,
    destination: TDestination,
    key: string
  ): TDestination => {
    const values: TDestination = AutoMapper.exec(source, key);
    const result: TDestination = (<any>Object).assign({}, destination, values);
    return result;
  };

  private static parseMapping = <TSource, TDestination>(
    source: TSource,
    mapping: Mapping<TSource, TDestination>
  ): TDestination => {
    let result: any = {} as TDestination;

    mapping.mapsList.forEach(map => {
      const { sourcePredicate, destinationPredicate, options = {} } = map;
      const destinationKeys = getKeysFromPredicate(
        destinationPredicate ? destinationPredicate : sourcePredicate
      );
      const mustContinue = options.condition ? options.condition(source) : true;

      if (mustContinue) {
        let valueToAssign: any = options.operation
          ? options.operation(sourcePredicate(source))
          : sourcePredicate(source);

        // Type conversion.
        valueToAssign = convert(valueToAssign, options.type);

        setValueByKeys(result, valueToAssign, destinationKeys);
      }
    });

    return result;
  };
}
