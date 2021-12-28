import maxProfit from "./index";

describe("#08 - maxProfit", () => {
  const checkPricesWithProfif = [
    { values: [39, 18, 29, 25, 34, 32, 5], result: 16 },
    { values: [39, 29, 18, 25, 34, 32, 5], result: 16 },
    { values: [10, 20, 30, 40, 50, 60, 70], result: 60 },
  ];

  const checkPricesWithoutProfif = [
    { values: [18, 15, 12, 11, 9, 7] },
    { values: [3, 3, 3, 3, 3] },
  ];

  it("should return the max profit of the day", () => {
    checkPricesWithProfif.forEach((prices) => {
      expect(maxProfit(prices.values)).toBe(prices.result);
    });
  });

  it("should return -1 when making no profit", () => {
    checkPricesWithoutProfif.forEach((prices) => {
      expect(maxProfit(prices.values)).toBe(-1);
    });
  });
});
