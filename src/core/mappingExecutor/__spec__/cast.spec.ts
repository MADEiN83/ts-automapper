import { CastToTypes } from "../../interfaces";
import { castValue } from "../mapping-executor.utils";

const array: {
  from: any;
  to: CastToTypes;
  expected: { type: CastToTypes; value: any };
}[] = [
  {
    from: "my value",
    to: "string",
    expected: {
      type: "string",
      value: "my value",
    },
  },
  {
    from: "my value",
    to: "number",
    expected: {
      type: "number",
      value: NaN,
    },
  },
  // Boolean.
  {
    from: "my value",
    to: "boolean",
    expected: {
      type: "boolean",
      value: false,
    },
  },
  {
    from: "1",
    to: "boolean",
    expected: {
      type: "boolean",
      value: true,
    },
  },
  {
    from: 1,
    to: "boolean",
    expected: {
      type: "boolean",
      value: true,
    },
  },
  {
    from: "yes",
    to: "boolean",
    expected: {
      type: "boolean",
      value: true,
    },
  },
  {
    from: "true",
    to: "boolean",
    expected: {
      type: "boolean",
      value: true,
    },
  },
  {
    from: 872498749387,
    to: "boolean",
    expected: {
      type: "boolean",
      value: false,
    },
  },
  {
    from: "0",
    to: "boolean",
    expected: {
      type: "boolean",
      value: false,
    },
  },
  {
    from: 0,
    to: "boolean",
    expected: {
      type: "boolean",
      value: false,
    },
  },
  {
    from: "no",
    to: "boolean",
    expected: {
      type: "boolean",
      value: false,
    },
  },
  {
    from: "false",
    to: "boolean",
    expected: {
      type: "boolean",
      value: false,
    },
  },
];

describe("MappingExecutor utils cast tests", () => {
  array.forEach(({ from, to, expected }) => {
    it(`should cast '${from}' to ${to}`, () => {
      const value = castValue(from, to);
      expect(value).toBe(expected.value);
      expect(typeof value).toBe(expected.type);
    });
  });
});
