export default function maxProfit(prices) {
  const profit = prices.reduce((acc, val, idx) => {
    const tmpPrices = prices.slice(idx + 1).sort((a, b) => b - a);

    if (tmpPrices[0] > val && tmpPrices[0] - val > acc) {
      return tmpPrices[0] - val;
    }

    return acc;
  }, 0);

  return profit || -1;
}
