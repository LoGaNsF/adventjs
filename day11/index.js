export default function shouldBuyFidelity(times) {
  const ticketPrice = 12;
  const fidelityCardPrice = 250;
  const standardTickets = times * ticketPrice;

  const bonusTickets = Array.from({ length: times }, (v, k) => k + 1).reduce(
    (acc, num) => (acc += ticketPrice * Math.pow(0.75, num)),
    fidelityCardPrice
  );

  return standardTickets > bonusTickets;
}
