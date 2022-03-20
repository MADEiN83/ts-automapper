import { Input } from "../../automapper/__spec__/interface";
import { execConditions } from "../mapping-executor.utils";

describe("MappingExecutor utils tests", () => {
  it("should not pass if property is not empty", () => {
    const input: Input = { age: "29" };
    const isPassing = execConditions(input, (data) => data.age === undefined);
    expect(isPassing).toBeFalsy();
  });

  it("should not pass if properties is not empty", () => {
    const input: Input = { age: "29" };
    const isPassing = execConditions(
      input,
      (data: Input) => !data.age && !data.first_name
    );

    expect(isPassing).toBeFalsy();
  });

  it("should pass if property is not empty", () => {
    const input: Input = { age: "29" };
    const isPassing = execConditions(input, (data) => !!data.age);
    expect(isPassing).toBeTruthy();
  });

  it("should not pass if property not equals to wrong value", () => {
    const input: Input = { age: "29" };
    const isPassing = execConditions(input, (data) => data.age === "30");
    expect(isPassing).toBeFalsy();
  });

  it("should pass if properties is equals to a good value", () => {
    const input: Input = { age: "29" };
    const isPassing = execConditions(input, (data) => data.age === "29");
    expect(isPassing).toBeTruthy();
  });

  it("should not pass if property equals to a good value", () => {
    const input: Input = { age: "29" };
    const isPassing = execConditions(input, (data) => data.age !== "29");
    expect(isPassing).toBeFalsy();
  });

  it("should pass if properties not equals wrong value", () => {
    const input: Input = { age: "29" };
    const isPassing = execConditions(input, (data) => data.age !== "30");
    expect(isPassing).toBeTruthy();
  });
});
