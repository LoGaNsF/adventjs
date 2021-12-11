export default function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];

  return coins
    .reduceRight((acc, coin, idx) => {
      const coinsNumber = Math.floor(change / coin);
      change = change - coin * coinsNumber;

      return [...acc, coinsNumber];
    }, [])
    .reverse();
}
