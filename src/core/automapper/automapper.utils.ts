import Mapping from "../mapping";

export const instantiateMapping = (key: string): Mapping<any, any> => {
  return new Mapping(key);
};
