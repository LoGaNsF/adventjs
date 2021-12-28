import wrapGifts from ".";

describe("#13 - wrapGifts", () => {
  const checkGifts = [
    { gifts: ["📷", "⚽️"], result: ["****", "*📷*", "*⚽️*", "****"] },
    { gifts: ["🏀"], result: ["****", "*🏀*", "****"] },
    {
      gifts: ["🏈🎸", "🎮🧸"],
      result: ["******", "*🏈🎸*", "*🎮🧸*", "******"],
    },
    { gifts: ["🏈🎸"], result: ["******", "*🏈🎸*", "******"] },
  ];

  it("should wrap the gift with '*'", () => {
    checkGifts.forEach((check) => {
      expect(wrapGifts(check.gifts)).toStrictEqual(check.result);
    });
  });
});
