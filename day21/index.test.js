import canCarry from ".";

describe("#21 - canCarry", () => {
  const checkValidCarry = [
    {
      capacity: 3,
      trips: [
        [1, 1, 5],
        [2, 2, 10],
      ],
    },
    {
      capacity: 3,
      trips: [
        [2, 1, 5],
        [3, 5, 7],
      ],
    },
    {
      capacity: 4,
      trips: [
        [2, 3, 8],
        [2, 5, 7],
      ],
    },
    {
      capacity: 5,
      trips: [
        [2, 1, 5],
        [3, 3, 7],
      ],
    },
    {
      capacity: 3,
      trips: [
        [2, 1, 5],
        [3, 5, 7],
      ],
    },
    {
      capacity: 11,
      trips: [
        [3, 2, 7],
        [3, 7, 9],
        [8, 3, 9],
      ],
    },
    {
      capacity: 9999,
      trips: [
        [1, 2, 3],
        [2, 3, 4],
        [3, 4, 5],
        [4, 5, 6],
        [5, 6, 7],
        [6, 7, 8],
      ],
    },
  ];

  const checkInvalidCarry = [
    {
      capacity: 4,
      trips: [
        [2, 5, 8],
        [3, 6, 10],
      ],
    },
    {
      capacity: 1,
      trips: [[2, 3, 8]],
    },
    {
      capacity: 2,
      trips: [
        [1, 2, 4],
        [2, 3, 8],
      ],
    },
    {
      capacity: 4,
      trips: [
        [2, 1, 5],
        [3, 3, 7],
      ],
    },
    {
      capacity: 5,
      trips: [
        [1, 2, 3],
        [2, 3, 4],
        [3, 4, 5],
        [4, 5, 6],
        [5, 6, 7],
        [6, 7, 8],
      ],
    },
  ];

  test("should return that the carry is valid", () => {
    checkValidCarry.forEach((check) => {
      expect(canCarry(check.capacity, check.trips)).toBeTruthy();
    });
  });

  test("should return that the carry is invalid", () => {
    checkInvalidCarry.forEach((check) => {
      expect(canCarry(check.capacity, check.trips)).toBeFalsy();
    });
  });
});
