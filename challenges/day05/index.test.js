import daysToXmas from "./index";

describe("#05 - daysToXmas", () => {
  const checkDates = [
    { value: "Dec 1, 2021", result: 24 },
    { value: "Dec 24, 2021 00:00:01", result: 1 },
    { value: "Dec 24, 2021 23:59:59", result: 1 },
    { value: "December 20, 2021 03:24:00", result: 5 },
    { value: "Dec 25, 2021", result: 0 },
    { value: "Dec 26, 2021", result: -1 },
    { value: "Dec 31, 2021", result: -6 },
    { value: "Jan 1, 2022 00:00:01", result: -7 },
    { value: "Jan 1, 2022 23:59:59", result: -7 },
  ];

  it("should return days to christmas", () => {
    checkDates.forEach((date) => {
      expect(daysToXmas(new Date(date.value))).toBe(date.result);
    });
  });
});
