import wrapGifts from ".";

describe("#13 - wrapGifts", () => {
  const checkGifts = [
    { gifts: ["📷", "⚽️"], expected: ["****", "*📷*", "*⚽️*", "****"] },
    { gifts: ["🏀"], expected: ["****", "*🏀*", "****"] },
    {
      gifts: ["🏈🎸", "🎮🧸"],
      expected: ["******", "*🏈🎸*", "*🎮🧸*", "******"],
    },
    { gifts: ["🏈🎸"], expected: ["******", "*🏈🎸*", "******"] },
  ];

  test("should wrap the gift with '*'", () => {
    checkGifts.forEach((check) => {
      expect(wrapGifts(check.gifts)).toStrictEqual(check.expected);
    });
  });
});
