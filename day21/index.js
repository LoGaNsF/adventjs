export default function canCarry(capacity, trips) {
  return (
    trips.reduce((acc, trip, i, arr) => {
      const [gifts, pickupPoint] = trip;
      if (i > 0 && pickupPoint >= arr[i - 1][2]) {
        acc -= arr[i - 1][0];
      }

      return (acc += gifts);
    }, 0) <= capacity
  );
}
