export default function contains(store, product) {
  return store instanceof Object
    ? Object.values(store).some((val) => contains(val, product))
    : store === product;
}
