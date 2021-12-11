import sumPairs from "./index";

describe("#06 - sumPairs", () => {
  const chekPairs = [
    { numbers: [3, 5, 7, 2], result: 10, expected: [3, 7] },
    { numbers: [-3, -2, 7, -5], result: 10, expected: null },
    { numbers: [2, 2, 3, 1], result: 4, expected: [2, 2] },
    { numbers: [6, 7, 1, 2], result: 8, expected: [6, 2] },
    { numbers: [0, 2, 2, 3, -1, 1, 5], result: 6, expected: [1, 5] },
  ];
  test("should return an array with the values ​​that add up to the indicated value", () => {
    chekPairs.forEach((pairs) => {
      expect(sumPairs(pairs.numbers, pairs.result)).toStrictEqual(pairs.expected);
    });
  });
});
