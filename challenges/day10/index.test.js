import getCoins from "./index";

describe("#10 - getCoins", () => {
  const checkCoins = [
    { value: 51, result: [1, 0, 0, 0, 0, 1] },
    { value: 3, result: [1, 1, 0, 0, 0, 0] },
    { value: 5, result: [0, 0, 1, 0, 0, 0] },
    { value: 16, result: [1, 0, 1, 1, 0, 0] },
    { value: 100, result: [0, 0, 0, 0, 0, 2] },
  ];

  it("should return the minimum coin combination", () => {
    checkCoins.forEach((coins) => {
      expect(getCoins(coins.value)).toStrictEqual(coins.result);
    });
  });
});
