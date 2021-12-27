import learn from ".";

describe("#19 - learn", () => {
  const checkCourses = [
    {
      time: 10,
      courses: [2, 3, 8, 1, 4],
      result: [0, 2],
    },
    {
      time: 15,
      courses: [2, 10, 4, 1],
      result: [1, 2],
    },
    {
      time: 25,
      courses: [10, 15, 20, 5],
      result: [0, 1],
    },
    {
      time: 8,
      courses: [8, 2, 1],
      result: [1, 2],
    },
    {
      time: 8,
      courses: [8, 2, 1, 4, 3],
      result: [3, 4],
    },
    {
      time: 5,
      courses: [2, 2, 2, 2, 2, 2, 3],
      result: [0, 6],
    },
    {
      time: 10,
      courses: [1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5],
      result: [9, 10],
    },
  ];

  test("should return course indexes", () => {
    checkCourses.forEach((check) => {
      expect(learn(check.time, check.courses)).toStrictEqual(check.result);
    });
  });
});
