import checkIsSameTree from ".";

describe("#24 - checkIsSameTree", () => {
  const treeA = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null },
  };

  const treeB = {
    value: 1,
    left: {
      value: 3,
      left: { value: 2, left: null, right: null },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: { value: 4, left: null, right: null },
    },
  };

  it("should return that they are the same tree", () => {
    expect(checkIsSameTree(treeA, treeA)).toBeTruthy();
  });

  it("should return that they are not the same tree", () => {
    expect(checkIsSameTree(treeA, treeB)).toBeFalsy();
  });
});
