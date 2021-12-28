import missingReindeer from ".";

describe("#14 - missingReindeer", () => {
  const checkMissings = [
    { ids: [5, 6, 1, 2, 3, 7, 0], result: 4 },
    { ids: [0, 1], result: 2 },
    { ids: [3, 0, 1], result: 2 },
    { ids: [9, 2, 3, 5, 6, 4, 7, 0, 1], result: 8 },
    { ids: [0], result: 1 },
    { ids: [1], result: 0 },
    {
      ids: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 23,
      ],
      result: 20,
    },
  ];

  it("should return the missing ID", () => {
    checkMissings.forEach((check) => {
      expect(missingReindeer(check.ids)).toBe(check.result);
    });
  });
});
