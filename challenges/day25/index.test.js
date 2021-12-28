import canMouseEat from ".";

describe("#25 - canMouseEat", () => {
  const chekRooms = [
    {
      room: [
        [" ", " ", " "],
        [" ", " ", "m"],
        [" ", " ", "*"],
      ],
      games: [
        { direction: "up", result: false },
        { direction: "down", result: true },
        { direction: "left", result: false },
        { direction: "right", result: false },
      ],
    },
    {
      room: [
        ["*", " ", " ", " "],
        [" ", "m", "*", " "],
        [" ", " ", " ", " "],
        [" ", " ", " ", "*"],
      ],
      games: [
        { direction: "up", result: false },
        { direction: "down", result: false },
        { direction: "left", result: false },
        { direction: "right", result: true },
      ],
    },
    {
      room: [["*", "m"]],
      games: [
        { direction: "up", result: false },
        { direction: "down", result: false },
        { direction: "left", result: true },
        { direction: "right", result: false },
      ],
    },
    {
      room: [
        ["*", "*", "*"],
        ["*", "m", "*"],
        ["*", "*", "*"],
      ],
      games: [
        { direction: "up", result: true },
        { direction: "down", result: true },
        { direction: "left", result: true },
        { direction: "right", result: true },
      ],
    },
    {
      room: [
        [" ", " ", " "],
        [" ", "m", " "],
        [" ", " ", " "],
      ],
      games: [
        { direction: "up", result: false },
        { direction: "down", result: false },
        { direction: "left", result: false },
        { direction: "right", result: false },
      ],
    },
  ];

  it("should return if mouse can eat", () => {
    chekRooms.forEach((check) => {
      check.games.forEach((game) => {
        expect(canMouseEat(game.direction, check.room)).toBe(game.result);
      });
    });
  });
});
