export default function checkSledJump(heights) {
  const maxHeightIdx = heights.indexOf(Math.max(...heights));

  if (maxHeightIdx === 0 || maxHeightIdx === heights.length - 1) {
    return false;
  }

  const isValidHeight = (height, idx, arr) => {
    if (idx === maxHeightIdx) {
      return true;
    }

    return height < arr[idx + (idx < maxHeightIdx ? 1 : -1)];
  };

  return heights.every(isValidHeight);
}
