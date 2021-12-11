export default function createXmasTree(height) {
  let xmasTree = "";
  const maxWidth = height + (height - 1);

  for (let i = 1; i <= height; i++) {
    const asterisks = i + (i - 1);
    const spaces = (maxWidth - asterisks) / 2;
    xmasTree +=
      "_".repeat(spaces) + "*".repeat(asterisks) + "_".repeat(spaces) + "\n";
  }

  const trunkSpaces = (maxWidth - 1) / 2;
  xmasTree += "_".repeat(trunkSpaces) + "#" + "_".repeat(trunkSpaces) + "\n";
  xmasTree += "_".repeat(trunkSpaces) + "#" + "_".repeat(trunkSpaces) + "\n";

  return xmasTree.trim();
}
