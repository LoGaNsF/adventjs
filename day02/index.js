export default function listGifts(letter) {
  return letter
    .trim()
    .split(" ")
    .filter((gift) => gift.trim() !== "" && !gift.startsWith("_"))
    .reduce((acc, val) => {
      acc[val] ??= 0;
      acc[val]++;

      return acc;
    }, {});
}
