export default function wrapGifts(gifts) {
  if (!gifts.length) {
    return [];
  }

  const result = gifts.map((gift) => `*${gift}*`);
  result.unshift("*".repeat(gifts[0].length + 2));
  result.push("*".repeat(gifts[0].length + 2));

  return result;
}
