import countPackages from ".";

describe("#17 - countPackages", () => {
  const checkPackages = [
    {
      carriers: [
        ["dapelu", 5, ["midu", "jelowing"]],
        ["midu", 2, []],
        ["jelowing", 2, []],
      ],
      carrierID: "midu",
      result: 2,
    },
    {
      carriers: [
        ["dapelu", 5, ["midu", "jelowing"]],
        ["midu", 2, []],
        ["jelowing", 2, []],
      ],
      carrierID: "jelowing",
      result: 2,
    },
    {
      carriers: [
        ["dapelu", 5, ["midu", "jelowing"]],
        ["midu", 2, []],
        ["jelowing", 2, []],
      ],
      carrierID: "dapelu",
      result: 9,
    },
    {
      carriers: [
        ["dapelu", 5, ["midu", "jelowing"]],
        ["midu", 2, []],
        ["jelowing", 2, []],
      ],
      carrierID: "midu",
      result: 2,
    },
    {
      carriers: [
        ["dapelu", 5, ["midu", "jelowing"]],
        ["midu", 2, []],
        ["jelowing", 2, []],
      ],
      carrierID: "jelowing",
      result: 2,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "sergiomartinez",
      result: 4,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "facundocapua",
      result: 2,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "faviola",
      result: 1,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "conchaasensio",
      result: 6,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "camila",
      result: 15,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "jesuspoleo",
      result: 4,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "facundocapua",
      result: 2,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "faviola",
      result: 1,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "conchaasensio",
      result: 6,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "sergiomartinez",
      result: 4,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "facundocapua",
      result: 2,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "faviola",
      result: 1,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "conchaasensio",
      result: 6,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "camila",
      result: 15,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "jesuspoleo",
      result: 4,
    },
    {
      carriers: [
        ["lolivier", 8, ["camila", "jesuspoleo"]],
        ["camila", 5, ["sergiomartinez", "conchaasensio"]],
        ["jesuspoleo", 4, []],
        ["sergiomartinez", 4, []],
        ["conchaasensio", 3, ["facundocapua", "faviola"]],
        ["facundocapua", 2, []],
        ["faviola", 1, []],
      ],
      carrierID: "lolivier",
      result: 27,
    },
    {
      carriers: [
        ["a", 99, ["b"]],
        ["b", 1, ["c"]],
        ["c", 1, ["d"]],
        ["d", 1, []],
      ],
      carrierID: "d",
      result: 1,
    },
    {
      carriers: [
        ["a", 99, ["b"]],
        ["b", 1, ["c"]],
        ["c", 1, ["d"]],
        ["d", 1, []],
      ],
      carrierID: "c",
      result: 2,
    },
    {
      carriers: [
        ["a", 99, ["b"]],
        ["b", 1, ["c"]],
        ["c", 1, ["d"]],
        ["d", 1, []],
      ],
      carrierID: "b",
      result: 3,
    },
    {
      carriers: [
        ["a", 99, ["b"]],
        ["b", 1, ["c"]],
        ["c", 1, ["d"]],
        ["d", 1, []],
      ],
      carrierID: "a",
      result: 102,
    },
    {
      carriers: [
        ["a", 99, ["b"]],
        ["b", 1, ["c"]],
        ["c", 1, ["d"]],
        ["d", 1, []],
      ],
      carrierID: "d",
      result: 1,
    },
    {
      carriers: [
        ["a", 99, ["b"]],
        ["b", 1, ["c"]],
        ["c", 1, ["d"]],
        ["d", 1, []],
      ],
      carrierID: "c",
      result: 2,
    },
    {
      carriers: [
        ["a", 99, ["b"]],
        ["b", 1, ["c"]],
        ["c", 1, ["d"]],
        ["d", 1, []],
      ],
      carrierID: "b",
      result: 3,
    },
    {
      carriers: [
        ["a", 99, ["b"]],
        ["b", 1, ["c"]],
        ["c", 1, ["d"]],
        ["d", 1, []],
      ],
      carrierID: "d",
      result: 1,
    },
    {
      carriers: [
        ["a", 99, ["b"]],
        ["b", 1, ["c"]],
        ["c", 1, ["d"]],
        ["d", 1, []],
      ],
      carrierID: "c",
      result: 2,
    },
    {
      carriers: [
        ["a", 99, ["b"]],
        ["b", 1, ["c"]],
        ["c", 1, ["d"]],
        ["d", 1, []],
      ],
      carrierID: "d",
      result: 1,
    },
  ];

  test("should count packages of the transportist", () => {
    checkPackages.forEach((check) => {
      expect(countPackages(check.carriers, check.carrierID)).toBe(check.result);
    });
  });
});
