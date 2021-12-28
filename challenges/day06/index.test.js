import sumPairs from "./index";

describe("#06 - sumPairs", () => {
  const chekPairs = [
    { numbers: [3, 5, 7, 2], sum: 10, result: [3, 7] },
    { numbers: [-3, -2, 7, -5], sum: 10, result: null },
    { numbers: [2, 2, 3, 1], sum: 4, result: [2, 2] },
    { numbers: [6, 7, 1, 2], sum: 8, result: [6, 2] },
    { numbers: [0, 2, 2, 3, -1, 1, 5], sum: 6, result: [1, 5] },
  ];
  it("should return an array with the values ​​that add up to the indicated value", () => {
    chekPairs.forEach((pairs) => {
      expect(sumPairs(pairs.numbers, pairs.sum)).toStrictEqual(pairs.result);
    });
  });
});
