import checkSledJump from ".";

describe("#15 - checkSledJump", () => {
  const checkValidJumps = [
    [1, 2, 3, 2, 1],
    [0, 1, 0],
    [0, 3, 2, 1],
    [0, 1000, 1],
  ];

  const checkInvalidJumps = [
    [1, 2, 3],
    [2, 4, 4, 6, 2],
    [0, 0, 0],
    [6, 5, 4, 5, 6, 7],
    [1, 2, 3, 4, 3, 2, 1, 2, 3],
  ];

  test("should return that the jump is valid", () => {
    checkValidJumps.forEach((jump) => {
      expect(checkSledJump(jump)).toBeTruthy();
    });
  });

  test("should return that the jump is invalid", () => {
    checkInvalidJumps.forEach((jump) => {
      expect(checkSledJump(jump)).toBeFalsy();
    });
  });
});
