import AutoMapper from "../index";
import { assert } from "chai";

import { IData1, IData2 } from "../src/samples/samples.interfaces";

describe("AutoMapper Tests", () => {
  it("Simple Mapping", () => {
    const WANTED_RESULT = "A SIMPLE LABEL HERE.";
    const data: IData1 = { column: WANTED_RESULT };

    AutoMapper.createDefinition<IData1, IData2>("one").map(
      p => p.column,
      p => p.label
    );
    const result: IData2 = AutoMapper.exec(data, "one");
    assert.equal(WANTED_RESULT, result.label);
  });

  it("Simple Mapping with operation", () => {
    const data: IData1 = { column: "1_Un Label ici" };

    AutoMapper.createDefinition<IData1, IData2>("two")
      .map(p => p.column, p => p.id, {
        type: AutoMapper.TYPES.INTEGER,
        operation: (p: any) => p.split("_")[0]
      })
      .map(p => p.column, p => p.label, {
        operation: (p: any) => p.split("_")[1]
      });

    const result: IData2 = AutoMapper.exec(data, "two");
    assert.equal(result.id, 1);
    assert.equal(result.label, "Un Label ici");
  });
});
