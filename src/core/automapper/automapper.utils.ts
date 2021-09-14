import AutoMapper from ".";
import Mapping from "../mapping";

export const instantiateMapping = (key: string): Mapping<any, any> => {
  const mapping = new Mapping(key);
  AutoMapper.mappings.push(mapping);
  return mapping;
};
