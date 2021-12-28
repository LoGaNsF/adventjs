export default function getMinJump(obstacles) {
  return Array.from({ length: Math.max(...obstacles) }, (v, k) => k + 2)
    .filter((num) => !obstacles.includes(num))
    .filter((num) => !obstacles.some((o) => o % num === 0))
    .shift();
}
