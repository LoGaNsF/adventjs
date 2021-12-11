import groupBy from "./index";

describe("#09 - groupBy", () => {
  const checkGroups = [
    {
      values: [6.1, 4.2, 6.3],
      it: Math.floor,
      expected: { 6: [6.1, 6.3], 4: [4.2] },
    },
    {
      values: ["one", "two", "three"],
      it: "length",
      expected: { 3: ["one", "two"], 5: ["three"] },
    },
    {
      values: [{ age: 23 }, { age: 24 }],
      it: "age",
      expected: { 23: [{ age: 23 }], 24: [{ age: 24 }] },
    },

    {
      values: [1397639141184, 1363223700000],
      it: (timestamp) => new Date(timestamp).getFullYear(),
      expected: { 2013: [1363223700000], 2014: [1397639141184] },
    },
    {
      values: [
        { title: "JavaScript: The Good Parts", rating: 8 },
        { title: "Aprendiendo Git", rating: 10 },
        { title: "Clean Code", rating: 9 },
      ],
      it: "rating",
      expected: {
        8: [{ title: "JavaScript: The Good Parts", rating: 8 }],
        9: [{ title: "Clean Code", rating: 9 }],
        10: [{ title: "Aprendiendo Git", rating: 10 }],
      },
    },
  ];

  test("should group by the expecified parameter", () => {
    checkGroups.forEach((group) => {
      expect(groupBy(group.values, group.it)).toStrictEqual(group.expected);
    });
  });
});
