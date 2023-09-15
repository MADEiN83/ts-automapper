import type { FieldMapType } from "./types";
import FieldMap from "./field-map";
import { deepMerge } from "../utils/object.utils";

export default class AutoMapper {
  private static mappings: Record<string, FieldMap<any, any>[]> = {};

  /**
   *
   * @param key Unique identifier for the mapping you created with .create()
   * @param mappings You field mappings from A to B
   * @example
   * ```ts
   * type FromType = { age: string };
   * type ToType = { age: number };
   *
   * AutoMapper.create<FromType, ToType>("UNIK_KEY", [
   *   ["age", ({ age }) => +(age || 0)],
   * ]);
   * ```
   */
  static create = <A, B>(key: string, mappings: FieldMapType<A, B>[]) => {
    if (this.mappings[key]) {
      throw new Error(`The key "${key}" for the mapping already exists`);
    }

    mappings.forEach((row) => {
      const fieldMap = new FieldMap<A, B>(row);

      if (!this.mappings[key]) this.mappings[key] = [];

      this.mappings[key].push(fieldMap);
    });
  };

  /**
   *
   * @param key Unique identifier for the mapping you created with .create()
   * @param rawObject Your raw object
   * @returns Your DTO object, converted from your raw object
   * @example
   * ```ts
   * type FromType = { age: string };
   * type ToType = { age: number };
   *
   * const output: ToType = AutoMapper.apply<FromType, ToType>("UNIK_KEY", { age: "31" });
   * ```
   */
  static apply = <A, B>(key: string, rawObject: A): B => {
    const mappings = this.mappings[key];
    let output = {} as B;

    for (const row of mappings) {
      output = deepMerge(output, row.apply(rawObject));
    }

    return output;
  };
}
