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

  it("Nested Mapping", () => {
    const data: IData1 = { column: "Anthony TEST" };

    AutoMapper.createDefinition<IData1, IData2>("three").map(
      p => p.column,
      p => p.user.firstname
    );

    const result: IData2 = AutoMapper.exec(data, "three");
    assert.equal(result.user.firstname, "Anthony TEST");
  });

  it("Nested complexe Mapping", () => {
    const data: IData1 = {
      column: "Anthony TEST",
      nested: { value: "Nested value here" }
    };

    AutoMapper.createDefinition<IData1, IData2>("four").map(
      p => p.nested && p.nested.value,
      p => p.user.firstname
    );

    const result: IData2 = AutoMapper.exec(data, "four");
    assert.equal(result.user.firstname, "Nested value here");
  });

  it("Type mapping", () => {
    const data: IData1 = {
      column: "7_ADS"
    };

    AutoMapper.createDefinition<IData1, IData2>("five").map(
      p => p.column,
      p => p.id,
      {
        operation: (p: string) => p.split("_")[0],
        type: AutoMapper.TYPES.INTEGER
      }
    );

    const result: IData2 = AutoMapper.exec(data, "five");
    assert.equal(result.id, 7);
  });

  it("Assign existing object & nested assignation", () => {
    const data: IData1 = {
      column: "7_Marion"
    };

    const data2: IData2 = {
      id: 9,
      label: "Hey",
      user: { firstname: "Anthony" }
    };

    AutoMapper.createDefinition<IData1, IData2>("six")
      .map(p => p.column, p => p.id, {
        operation: (p: string) => p.split("_")[0],
        type: AutoMapper.TYPES.INTEGER
      })
      .map(p => p.column, p => p.user.firstname, {
        operation: (p: string) => p.split("_")[1]
      });

    const result: IData2 = AutoMapper.assign(data, data2, "six");
    assert.equal(result.id, 7);
    assert.equal(result.user.firstname, "Marion");
  });

  it("Conditionnal mapping", () => {
    const data: IData1 = {
      column: "7_Marion",
      nested: { value: "false" }
    };

    const data2: IData2 = {
      id: 9,
      label: "Hey",
      user: { firstname: "Anthony" }
    };

    AutoMapper.createDefinition<IData1, IData2>("seven")
      .map(p => p.column, p => p.id, {
        operation: (p: string) => p.split("_")[0],
        type: AutoMapper.TYPES.INTEGER
      })
      .map(p => p.column, p => p.user.firstname, {
        operation: (p: string) => p.split("_")[1],
        condition: (p: IData1) => p.nested && p.nested.value === "true"
      });

    const result: IData2 = AutoMapper.assign(data, data2, "seven");
    assert.equal(result.id, 7);
    assert.equal(result.user.firstname, "Anthony");
  });

  it("Date type", () => {
    const wantedResult = new Date("2019-07-30 08:35:00");
    const data: IData1 = {
      column: "2019-07-30 08:35:00"
    };

    AutoMapper.createDefinition<IData1, IData2>("eight").map(
      p => p.column,
      p => p.label,
      {
        type: AutoMapper.TYPES.DATE
      }
    );

    const result: IData2 = AutoMapper.exec(data, "eight");
    assert.isTrue((result.label as any) instanceof Date);
    assert.equal(result.label, wantedResult.toString());
  });
});
