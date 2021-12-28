import createXmasTree from "./index";

describe("#04 - createXmasTree", () => {
  it("should create a 3 floors tree", () => {
    const result = "__*__\n_***_\n*****\n__#__\n__#__\n";

    expect(createXmasTree(3)).toBe(result.trim());
  });

  it("should create a 5 floors tree", () => {
    const result =
      "____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____\n";

    expect(createXmasTree(5)).toBe(result.trim());
  });
});
