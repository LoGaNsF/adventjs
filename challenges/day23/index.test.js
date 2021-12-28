import canReconfigure from ".";

describe("#23 - canReconfigure", () => {
  const checkValidReconfigurations = [
    { from: "BAL", to: "LIB" },
    { from: "XBOX", to: "XOBX" },
    { from: "xxxMMM", to: "aaaDDD" },
    { from: "abcdefghijkl", to: "lkjihgfedcba" },
];

const checkInvalidReconfigurations = [
    { from: "CON", to: "JUU" },
    { from: "XBOX", to: "XXOB" },
    { from: "MMM", to: "MID" },
    { from: "AA", to: "MID" },
    { from: "MID", to: "AA" },
    { from: "xxxqqqeeefffggg", to: "xxxqqqeeefffgg" },
  ];

  it("should return that the reconfiguration is valid", () => {
    checkValidReconfigurations.forEach((check) => {
      expect(canReconfigure(check.from, check.to)).toBeTruthy();
    });
  });

  it("should return that the reconfiguration is invalid", () => {
    checkInvalidReconfigurations.forEach((check) => {
      expect(canReconfigure(check.from, check.to)).toBeFalsy();
    });
  });
});
