import isValid from "./index";

describe("#03 - isValid", () => {
  const validLetters = [
    "bici coche (balón) bici coche peluche",
    "(muñeca) consola bici",
    "(a) (b) (c)",
  ];

  const invalidLetters = [
    "bici coche (balón bici coche",
    "peluche (bici [coche) bici coche balón",
    "(peluche {) bici",
    "() bici",
  ];

  test("should be a valid letter", () => {
    validLetters.forEach((letter) => {
      expect(isValid(letter)).toBeTruthy();
    });
  });

  test("should be an invalid letter", () => {
    invalidLetters.forEach((letter) => {
      expect(isValid(letter)).toBeFalsy();
    });
  });
});
