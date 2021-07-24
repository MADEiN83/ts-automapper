import AutoMapper from "..";
import { Input, Output } from "./interface";

describe("AutoMapper tests", () => {
  beforeEach(() => {
    AutoMapper.reset();
  });

  it("should return 1 when adding only one mapping", () => {
    AutoMapper.create<Input, Output>("key");
    expect(AutoMapper.mappings.length).toBe(1);
    expect(AutoMapper.mappings[0].key).toBe("key");
  });

  it("should return 2 when mapping two fields", () => {
    AutoMapper.create<Input, Output>("key")
      .map(
        (p) => p.first_name,
        (p) => p.firstName
      )
      .map(
        (p) => p.last_name,
        (p) => p.lastName
      );

    expect(AutoMapper.mappings[0].key).toBe("key");
    expect(AutoMapper.mappings[0].predicates.length).toBe(2);
  });

  it("should map two simple fields", () => {
    AutoMapper.create<Input, Output>("key")
      .map(
        (p) => p.first_name,
        (p) => p.firstName
      )
      .map(
        (p) => p.last_name,
        (p) => p.lastName
      );

    const output = AutoMapper.exec<Input, Output>("key", {
      first_name: "Anthony",
      last_name: "MADEiN83",
    });

    expect(output).toEqual({ firstName: "Anthony", lastName: "MADEiN83" });
  });

  it("should map nested fields", () => {
    interface Input1 {
      a_person: { a_firstName: string; a_lastName: string };
    }
    interface Output2 {
      person: { firstName: string; lastName: string };
    }

    AutoMapper.create<Input1, Output2>("key")
      .map(
        (p) => p.a_person.a_firstName,
        (p) => p.person.firstName
      )
      .map(
        (p) => p.a_person.a_lastName,
        (p) => p.person.lastName
      );

    const output = AutoMapper.exec<Input1, Output2>("key", {
      a_person: { a_firstName: "Anthony", a_lastName: "MADEiN83" },
    });

    expect(output).toEqual({
      person: { firstName: "Anthony", lastName: "MADEiN83" },
    });
  });

  it("should map with types", () => {
    AutoMapper.create<Input, Output>("key").map(
      (p) => p.age,
      (p) => p.age,
      {
        type: "number",
      }
    );

    const output = AutoMapper.exec<Input, Output>("key", {
      age: "28",
    });

    expect(output).toEqual({ age: 28 });
  });

  it("should map with operations", () => {
    AutoMapper.create<Input, Output>("key").map(
      (p) => p.first_name,
      (p) => p.firstName,
      {
        type: "string",
        operation: (value: string) => value.trim(),
      }
    );

    const output = AutoMapper.exec<Input, Output>("key", {
      first_name: "       Anthony ",
    });

    expect(output).toEqual({ firstName: "Anthony" });
  });

  it("should throw exception when mapping is unknown", () => {
    try {
      AutoMapper.exec<Input, Output>("fake", {});
    } catch (e) {
      expect(e).not.toBeUndefined();
      expect(e.message).toBe("Mapping configuration was not found for 'fake'");
    }
  });

  it("should map date", () => {
    AutoMapper.create<Input, Output>("key").map(
      (p) => p.updated_at,
      (p) => p.updatedAt,
      {
        type: "date",
      }
    );

    const output = AutoMapper.exec<Input, Output>("key", {
      updated_at:
        "Sat Jul 24 2021 10:36:04 GMT+0200 (heure d’été d’Europe centrale)",
    });

    expect(output).toEqual({
      updatedAt: new Date(
        "Sat Jul 24 2021 10:36:04 GMT+0200 (heure d’été d’Europe centrale)"
      ),
    });
  });

  it("should map date", () => {
    AutoMapper.create<Input, Output>("key").map(
      (p) => p.updated_at,
      (p) => p.updatedAt,
      {
        type: "date",
      }
    );

    const output = AutoMapper.exec<Input, Output>("key", {
      updated_at: "",
    });

    expect(output).toEqual({
      updatedAt: undefined,
    });
  });
});
