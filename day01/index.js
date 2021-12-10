export default function contarOvejas(ovejas) {
  return ovejas
    .filter((oveja) => oveja.color === "rojo")
    .filter((oveja) => /[n]{1}[a]{1}/gi.test(oveja.name));
}
