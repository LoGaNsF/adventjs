import daysToXmas from "./index";

describe("#05 - daysToXmas", () => {
  const checkDates = [
    { value: "Dec 1, 2021", expected: 24 },
    { value: "Dec 24, 2021 00:00:01", expected: 1 },
    { value: "Dec 24, 2021 23:59:59", expected: 1 },
    { value: "December 20, 2021 03:24:00", expected: 5 },
    { value: "Dec 25, 2021", expected: 0 },
    { value: "Dec 26, 2021", expected: -1 },
    { value: "Dec 31, 2021", expected: -6 },
    { value: "Jan 1, 2022 00:00:01", expected: -7 },
    { value: "Jan 1, 2022 23:59:59", expected: -7 },
  ];

  test("should return days to christmas", () => {
    checkDates.forEach((date) => {
      expect(daysToXmas(new Date(date.value))).toBe(date.expected);
    });
  });
});
