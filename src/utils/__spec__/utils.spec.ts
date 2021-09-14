import { getKeysFromPredicate, setDeepValue, getDeepValue } from "..";

describe("Utils tests", () => {
  it("[getKeysFromPredicate] should return '[person, firstname]' keys when predicate is 'p => p.person.firstname'", () => {
    const output = getKeysFromPredicate((p) => p.person.firstname);
    expect(output).toHaveLength(2);
    expect(output).toEqual(["person", "firstname"]);
  });

  it("[getKeysFromPredicate] should return empty array if no predicate was provided", () => {
    const output = getKeysFromPredicate(null as any);
    expect(output).toHaveLength(0);
    expect(output).toEqual([]);
  });

  it("[setDeepValue] should set lastName when setDeepValue is called", () => {
    const object: any = {
      person: { firstName: "First name goes here" },
    };

    setDeepValue(object, "person.lastName", "Last name goes here");
    expect(object.person.firstName).toBe("First name goes here");
    expect(object.person.lastName).toBe("Last name goes here");
  });

  it("[getDeepValue] should return 'Nope' when path is good", () => {
    const object: any = {
      person: {
        very: {
          deep: {
            value: { firstName: "First name goes here" },
          },
        },
      },
    };

    const value = getDeepValue(object, "person.very.deep.value.firstName");
    expect(value).toBe("First name goes here");
  });

  it("[getDeepValue] should return undefined when property is wrong", () => {
    const object: any = {
      person: {
        very: {
          deep: {
            value: { firstName: "First name goes here" },
          },
        },
      },
    };

    const value = getDeepValue(object, "person.very.deep.value.fake.firstName");
    expect(value).toBeUndefined();
  });
});
