export default function countPackages(carriers, carrierID) {
  const selectedCarrier = carriers.find((carrier) => carrier[0] === carrierID);

  if (!selectedCarrier) {
    return 0;
  }

  const [, packages, subordinates] = selectedCarrier;

  return subordinates.reduce(
    (acc, sub) => acc + countPackages(carriers, sub),
    packages
  );
}
