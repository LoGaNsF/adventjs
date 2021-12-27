export default function canMouseEat(direction, game) {
  const mousePosition = game.reduce(
    (acc, line, idx) => {
      if (line.includes("m")) {
        return (acc = [idx, line.indexOf("m")]);
      }

      return acc;
    },
    [0, 0]
  );

  const [y, x] = mousePosition;
  switch (direction) {
    case "up":
      return game[y - 1]?.[x] === "*";
    case "down":
      return game[y + 1]?.[x] === "*";
    case "right":
      return game[y]?.[x + 1] === "*";
    case "left":
      return game[y]?.[x - 1] === "*";
  }
}
