export default function sumPairs(numbers, result) {
  for (const [idx, val] of numbers.entries()) {
    for (let i = idx + 1; i < numbers.length; i++) {
      if (val + numbers[i] === result) {
        return [val, numbers[i]];
      }
    }
  }

  return null;
}
