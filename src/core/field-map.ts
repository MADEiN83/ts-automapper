import type { FieldMapType } from "./types";
import { injectValueToPath } from "../utils/object.utils";

export default class FieldMap<FromObjectType, ToObjectType> {
  private mapping: FieldMapType<FromObjectType, ToObjectType>;

  constructor(map: FieldMapType<FromObjectType, ToObjectType>) {
    this.mapping = map;
  }

  apply = (rawObject: FromObjectType) => {
    const [destinationKey, rawSelector] = this.mapping;
    const rawValue = rawSelector(rawObject);

    let output: any = {};

    injectValueToPath(rawValue, destinationKey, output);

    return output;
  };
}
