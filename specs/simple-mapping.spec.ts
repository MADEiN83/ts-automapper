import TSAutoMapper from "../src/core/mapper";

type RawPerson = {
  person: { first_name: string; last_name: string };
  age: string;
};

type DTOPerson = {
  person: { firstName: string; lastName: string; age: number };
};

describe("Automapper tests", () => {
  it("should map a simple type", () => {
    type RawPerson2 = { first_name: string; last_name: string; age: string };

    type DTOPerson2 = { firstName: string; lastName: string; age: number };

    TSAutoMapper.create<RawPerson2, DTOPerson2>("raw", [
      ["firstName", ({ first_name }) => first_name],
      ["lastName", ({ last_name }) => last_name],
      ["age", ({ age }) => +(age || 0)],
    ]);

    const output = TSAutoMapper.apply<RawPerson2, DTOPerson2>("raw", {
      first_name: "Alicia",
      last_name: "MRN",
      age: "30",
    });

    expect(output).toEqual({ age: 30, firstName: "Alicia", lastName: "MRN" });
  });

  it("should map a nested type", () => {
    TSAutoMapper.create<RawPerson, DTOPerson>("simpleMap", [
      ["person.firstName", ({ person }) => person.first_name],
      ["person.lastName", ({ person }) => person.last_name],
      ["person.age", ({ age }) => +(age || 0)],
    ]);

    const output = TSAutoMapper.apply<RawPerson, DTOPerson>("simpleMap", {
      person: { first_name: "Alicia", last_name: "MRN" },
      age: "30",
    });

    expect(output).toEqual({
      person: { age: 30, firstName: "Alicia", lastName: "MRN" },
    });
  });

  it("should map a type with string operations", () => {
    TSAutoMapper.create<RawPerson, DTOPerson>("withOperations", [
      ["person.firstName", ({ person }) => person.first_name.trim()],
      [
        "person.lastName",
        ({ person }) => person.last_name.trim().toUpperCase(),
      ],
      ["person.age", ({ age }) => +(age || 0)],
    ]);

    const output = TSAutoMapper.apply<RawPerson, DTOPerson>("withOperations", {
      person: { first_name: "ANTHONY  ", last_name: " DI stefano" },
      age: "15",
    });

    expect(output).toEqual({
      person: {
        age: 15,
        firstName: "ANTHONY",
        lastName: "DI STEFANO",
      },
    });
  });
});
