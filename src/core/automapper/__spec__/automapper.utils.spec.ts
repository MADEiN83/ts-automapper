import { instantiateMapping } from "../automapper.utils";

describe("AutoMapper tests", () => {
  it("should instantiate a raw mapping", () => {
    const mapping = instantiateMapping("mappingKey");
    expect(mapping).toBeDefined();
    expect(mapping.key).toEqual("mappingKey");
    expect(mapping.predicates).toHaveLength(0);
  });
});
