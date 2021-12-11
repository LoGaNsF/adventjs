import shouldBuyFidelity from "./index";

describe("#11 - shouldBuyFidelity", () => {
  const checkNormalcases = [0, 1, 2, 10, 20, 23];
  const checkFidelityCases = [24, 25, 48, 100, 1000];

  test("should indicate that it is not profitable", () => {
    checkNormalcases.forEach((times) => {
      expect(shouldBuyFidelity(times)).toBeFalsy();
    });
  });

  test("should indicate that if it is profitable", () => {
    checkFidelityCases.forEach((times) => {
      expect(shouldBuyFidelity(times)).toBeTruthy();
    });
  });
});
