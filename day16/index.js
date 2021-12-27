export default function decodeNumber(symbols) {
  const dictionary = { ".": 1, ",": 5, ":": 10, ";": 50, "!": 100 };

  if (!/^[.,:;!]+$/gi.test(symbols)) {
    return NaN;
  }

  return Array.from(symbols).reduce((acc, value, idx) => {
    const currentValue = dictionary[value];
    const nextValue = dictionary[symbols.charAt(idx + 1)] || 0;

    return (acc += nextValue > currentValue ? currentValue * -1 : currentValue);
  }, 0);
}
