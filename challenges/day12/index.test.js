import getMinJump from "./index";

describe("#12 - getMinJump", () => {
  const checkObtacles = [
    { obstacles: [5, 3, 6, 7, 9], result: 4 },
    { obstacles: [2, 4, 6, 8, 10], result: 7 },
    { obstacles: [1, 2, 3, 5], result: 4 },
    { obstacles: [3, 7, 5], result: 2 },
    { obstacles: [9, 5, 1], result: 2 },
    { obstacles: [2, 5, 8, 11, 14, 3, 6, 9], result: 10 },
    { obstacles: [14, 10, 8, 2, 3, 6], result: 9 },
  ];

  it("should return the min jump", () => {
    checkObtacles.forEach((obj) => {
      expect(getMinJump(obj.obstacles)).toBe(obj.result);
    });
  });
});
