import decodeNumber from ".";

describe("#16 - decodeNumber", () => {
  const checkValidSymbols = [
    { symbols: ".,", result: 4 },
    { symbols: ",.", result: 6 },
    { symbols: ",...", result: 8 },
    { symbols: ".;", result: 49 },
    { symbols: "..,", result: 5 },
    { symbols: "..,!", result: 95 },
    { symbols: ".;!", result: 49 },
    { symbols: "!!!", result: 300 },
    { symbols: ";!", result: 50 },
    { symbols: ";", result: 50 },
    { symbols: ".........!", result: 107 },
    { symbols: ";!;", result: 100 },
    { symbols: ";;;;!!", result: 300 },
  ];

  const checkInvalidSymbols = [";.W", "midu"];

  test("should convert the symbols to a number", () => {
    checkValidSymbols.forEach((check) => {
      expect(decodeNumber(check.symbols)).toBe(check.result);
    });
  });

  test("should return NaN if it doesn't recognize any symbols", () => {
    checkInvalidSymbols.forEach((symbols) => {
      expect(decodeNumber(symbols)).toBeNaN();
    });
  });
});
