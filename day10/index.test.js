import getCoins from "./index";

describe("#10 - getCoins", () => {
  const checkCoins = [
    { value: 51, expected: [1, 0, 0, 0, 0, 1] },
    { value: 3, expected: [1, 1, 0, 0, 0, 0] },
    { value: 5, expected: [0, 0, 1, 0, 0, 0] },
    { value: 16, expected: [1, 0, 1, 1, 0, 0] },
    { value: 100, expected: [0, 0, 0, 0, 0, 2] },
  ];

  test("should return the minimum coin combination", () => {
    checkCoins.forEach((coins) => {
      expect(getCoins(coins.value)).toStrictEqual(coins.expected);
    });
  });
});
