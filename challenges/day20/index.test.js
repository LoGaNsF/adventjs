import pangram from ".";

describe("#20 - pangram", () => {
  const checkValidLetters = [
    "Whisky bueno: ¡excitad mi frágil pequeña vejez!",
    "Extraño pan de col y kiwi se quemó bajo fugaz vaho",
    "Jovencillo emponzoñado de whisky: ¡qué figurota exhibe!",
  ];

  const checkInvalidLetters = [
    "¡Qué whisky! ¡Qué whisky! ¡Qué whisky!",
    "Esto es una frase larga pero no tiene todas las letras del abecedario",
    "De la a a la z, nos faltan letras",
    '!"·$%&/()=?¿^*Ç¨_:;.|@#¢∞¬÷“”≠´‚abcdefghijz',
    '!"·$%&/()=?¿^*Ç¨_:;.|@#¢∞¬÷“”≠´‚abcdefghij',
    "abcdefghijklmnopqrstuvwxyz",
    "abcdefgññññijklmnopqrstuvwxyz",
  ];

  it("should return that the letter is valid", () => {
    checkValidLetters.forEach((letter) => {
      expect(pangram(letter)).toBeTruthy();
    });
  });

  it("should return that the letter is invalid", () => {
    checkInvalidLetters.forEach((letter) => {
      expect(pangram(letter)).toBeFalsy();
    });
  });
});
