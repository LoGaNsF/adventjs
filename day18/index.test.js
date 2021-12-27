import fixFiles from ".";

describe("#18 - fixFiles", () => {
  const checkFiles = [
    {
      files: ["photo", "postcard", "photo", "photo", "video"],
      result: ["photo", "postcard", "photo(1)", "photo(2)", "video"],
    },
    {
      files: ["file", "file", "file", "game", "game"],
      result: ["file", "file(1)", "file(2)", "game", "game(1)"],
    },
    {
      files: ["file", "file(1)", "icon", "icon(1)", "icon(1)"],
      result: ["file", "file(1)", "icon", "icon(1)", "icon(1)(1)"],
    },
    {
      files: ["a", "a", "aa", "a", "a", "a", "aa"],
      result: ["a", "a(1)", "aa", "a(2)", "a(3)", "a(4)", "aa(1)"],
    },
  ];

  test("should rename duplicated files", () => {
    checkFiles.forEach((check) => {
      expect(fixFiles(check.files)).toStrictEqual(check.result);
    });
  });
});
