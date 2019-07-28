import { IMappingOptions } from "./interface";

export default class Mapping<TSource, TDestination> {
  mapsList: {
    sourcePredicate: (object: TSource) => any;
    destinationPredicate: (object: TDestination) => any;
    options: IMappingOptions<TSource>;
  }[] = [];

  /**
   * Map a field of TSource to a field of TDestination
   * @param {(object: TSource) => any} sourcePredicate A field of TSource object.
   * @param {(object: TDestination) => destination} destinationPredicate A field of TDestination object.
   * @param {IMappingOptions} options An object that represents your wanted configurations for the current mapping.
   * @return {Mapping<TSource, TDestination>} Returns the current class to be able to chain mapping.
   */
  map = (
    sourcePredicate: (object: TSource) => any,
    destinationPredicate: (object: TDestination) => any,
    options: IMappingOptions<TSource> = {}
  ): Mapping<TSource, TDestination> => {
    this.mapsList.push({ sourcePredicate, destinationPredicate, options });
    return this;
  };
}
