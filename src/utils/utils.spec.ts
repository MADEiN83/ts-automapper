import { getKeysFromPredicate, setDeepValue, getDeepValue } from ".";

describe("Utils tests", () => {
  it("should returns '[person, firstname]' keys when predicate is 'p => p.person.firstname'", () => {
    const output = getKeysFromPredicate(p => p.person.firstname);
    expect(output.length).toBe(2);
    expect(output).toEqual(["person", "firstname"]);
  });

  it("should set lastName = 'YEP' when setDeepValue will be called", () => {
    const object: any = {
      person: { firstName: "Nope" }
    };

    setDeepValue(object, "person.lastName", "YEP");
    expect(object.person.lastName).toBe("YEP");
  });

  it("should returns 'Nope' when ask to find deep value at 'person.very.deep.value.firstName'", () => {
    const object: any = {
      person: {
        very: {
          deep: {
            value: { firstName: "Nope" }
          }
        }
      }
    };

    const value = getDeepValue(object, "person.very.deep.value.firstName");
    expect(value).toBe("Nope");
  });
});
