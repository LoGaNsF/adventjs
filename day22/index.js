export default function countDecorations(bigTree) {
  const left = bigTree.left ? countDecorations(bigTree.left) : 0;
  const right = bigTree.right ? countDecorations(bigTree.right) : 0;

  return bigTree.value + left + right;
}
