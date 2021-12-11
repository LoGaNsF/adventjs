export default function daysToXmas(date) {
  const endDate = new Date("Dec 25, 2021");

  return Math.ceil((endDate - date) / (1000 * 60 * 60 * 24));
}
