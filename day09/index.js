export default function groupBy(collection, it) {
  let result = new Map();
  collection.forEach((val) => {
    const key = typeof it === "function" ? it(val) : val[it];
    const value = result.get(key) || [];
    result.set(key, [...value, val]);
  });

  return Object.fromEntries(result);
}
