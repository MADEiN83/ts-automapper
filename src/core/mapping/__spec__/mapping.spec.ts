import Mapping from "..";
import { Input, Output } from "../../automapper/__spec__/interface";

describe("Mapping tests", () => {
  it("should instantiate a raw mapping", () => {
    const mapping = new Mapping("mappingKey");
    expect(mapping).toBeDefined();
    expect(mapping.key).toEqual("mappingKey");
    expect(mapping.predicates).toHaveLength(0);
  });

  it("should instantiate a mapping with only one mapped field", () => {
    const mapping = new Mapping<Input, Output>("mappingKey");

    mapping.map(
      (src) => src.first_name,
      (dest) => dest.firstName
    );

    expect(mapping).toBeDefined();
    expect(mapping.key).toEqual("mappingKey");
    expect(mapping.predicates).toHaveLength(1);
  });

  it("should execute a simple mapping", () => {
    const mapping = new Mapping<Input, Output>("mappingKey");

    mapping.map(
      (src) => src.first_name,
      (dest) => dest.firstName
    );

    const output: Output = mapping.exec({ first_name: "Anthony" } as Input);

    expect(mapping).toBeDefined();
    expect(mapping.key).toEqual("mappingKey");
    expect(mapping.predicates).toHaveLength(1);
    expect(output).toBeDefined();
    expect(output).toEqual({ firstName: "Anthony" });
  });

  it("should execute a complexe mapping", () => {
    const mapping = new Mapping<Input, Output>("mappingKey");

    mapping.map(
      (src) => src.first_name,
      (dest) => dest.firstName,
      {
        operation: (data: string) => data.toUpperCase(),
      }
    );

    const output: Output = mapping.exec({ first_name: "Anthony" } as Input);

    expect(mapping).toBeDefined();
    expect(mapping.key).toEqual("mappingKey");
    expect(mapping.predicates).toHaveLength(1);
    expect(output).toBeDefined();
    expect(output).toEqual({ firstName: "ANTHONY" });
  });

  it("should execute a complexe mapping with a cast", () => {
    const mapping = new Mapping<Input, Output>("mappingKey");

    mapping.map(
      (src) => src.first_name,
      (dest) => dest.age,
      {
        type: "number",
      }
    );

    const output: Output = mapping.exec({ first_name: "29" } as Input);

    expect(mapping).toBeDefined();
    expect(mapping.key).toEqual("mappingKey");
    expect(mapping.predicates).toHaveLength(1);
    expect(output).toBeDefined();
    expect(output).toEqual({ age: 29 });
  });
});
