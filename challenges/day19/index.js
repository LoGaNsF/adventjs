export default function learn(time, courses) {
  if (courses.every((course) => course >= time)) {
    return null;
  }

  let validResults = [];

  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      if (courses[i] + courses[j] <= time) {
        validResults.push({ time: courses[i] + courses[j], indexes: [i, j] });
      }
    }
  }

  validResults.sort((a, b) => b.time - a.time);

  return validResults[0].indexes;
}
