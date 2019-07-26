import { IMappingOptions } from "./interface";

export default class Mapping<TSource, TDestination> {
  mapsList: {
    src: (object: TSource) => any;
    dst: (object: TDestination) => any;
    options: IMappingOptions;
  }[] = [];

  /**
   * Map a field of TSource to a field of TDestination
   * @param {(object: TSource) => any} source A field of TSource object.
   * @param {(object: TDestination) => destination} key A field of TDestination object.
   * @param {IMappingOptions} options An object that represents your wanted configurations for the current mapping.
   * @return {Mapping<TSource, TDestination>} Returns the current class to be able to chain mapping.
   */
  map = (
    source: (object: TSource) => any,
    destination: (object: TDestination) => any,
    options: IMappingOptions = {}
  ): Mapping<TSource, TDestination> => {
    this.mapsList.push({ src: source, dst: destination, options });
    return this;
  };
}
