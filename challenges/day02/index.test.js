import listGifts from "./index";

describe("#02 - listGifts", () => {
  const letter = "  bici coche balón __playstation bici   coche peluche   ";
  const letterConverted = { bici: 2, coche: 2, balón: 1, peluche: 1 };

  it("should convert string to object and group", () => {
    expect(listGifts(letter)).toStrictEqual(letterConverted);
  });
});
