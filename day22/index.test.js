import countDecorations from ".";

describe("#22 - countDecorations", () => {
  const checkDecoration = [
    {
      tree: {
        value: 1,
        left: null,
        right: null,
      },
      result: 1,
    },
    {
      tree: {
        value: 2,
        left: null,
        right: null,
      },
      result: 2,
    },
    {
      tree: {
        value: 3,
        left: null,
        right: null,
      },
      result: 3,
    },
    {
      tree: {
        value: 1,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: {
          value: 3,
          left: null,
          right: null,
        },
      },
      result: 6,
    },
    {
      tree: {
        value: 3,
        left: null,
        right: null,
      },
      result: 3,
    },
    {
      tree: {
        value: 7,
        left: {
          value: 3,
          left: null,
          right: null,
        },
        right: null,
      },
      result: 10,
    },
    {
      tree: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      result: 15,
    },
    {
      tree: {
        value: 5,
        left: null,
        right: null,
      },
      result: 5,
    },
    {
      tree: {
        value: 1,
        left: null,
        right: null,
      },
      result: 1,
    },
    {
      tree: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
      result: 12,
    },
    {
      tree: {
        value: 1,
        left: {
          value: 5,
          left: {
            value: 7,
            left: {
              value: 3,
              left: null,
              right: null,
            },
            right: null,
          },
          right: null,
        },
        right: {
          value: 6,
          left: {
            value: 5,
            left: null,
            right: null,
          },
          right: {
            value: 1,
            left: null,
            right: null,
          },
        },
      },
      result: 28,
    },
    {
      tree: {
        value: 3,
        left: null,
        right: null,
      },
      result: 3,
    },
    {
      tree: {
        value: 7,
        left: {
          value: 3,
          left: null,
          right: null,
        },
        right: null,
      },
      result: 10,
    },
    {
      tree: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      result: 15,
    },
    {
      tree: {
        value: 3,
        left: null,
        right: null,
      },
      result: 3,
    },
    {
      tree: {
        value: 7,
        left: {
          value: 3,
          left: null,
          right: null,
        },
        right: null,
      },
      result: 10,
    },
    {
      tree: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      result: 15,
    },
    {
      tree: {
        value: 6,
        left: {
          value: 5,
          left: {
            value: 7,
            left: {
              value: 3,
              left: null,
              right: null,
            },
            right: null,
          },
          right: null,
        },
        right: {
          value: 5,
          left: {
            value: 7,
            left: {
              value: 3,
              left: null,
              right: null,
            },
            right: null,
          },
          right: null,
        },
      },
      result: 36,
    },
    {
      tree: {
        value: 1,
        left: {
          value: 5,
          left: {
            value: 7,
            left: {
              value: 3,
              left: null,
              right: null,
            },
            right: null,
          },
          right: null,
        },
        right: {
          value: 6,
          left: {
            value: 5,
            left: {
              value: 7,
              left: {
                value: 3,
                left: null,
                right: null,
              },
              right: null,
            },
            right: null,
          },
          right: {
            value: 5,
            left: {
              value: 7,
              left: {
                value: 3,
                left: null,
                right: null,
              },
              right: null,
            },
            right: null,
          },
        },
      },
      result: 52,
    },
    {
      tree: {
        value: 1,
        left: null,
        right: null,
      },
      result: 1,
    },
    {
      tree: {
        value: 2,
        left: null,
        right: null,
      },
      result: 2,
    },
    {
      tree: {
        value: 4,
        left: {
          value: 1,
          left: null,
          right: null,
        },
        right: {
          value: 2,
          left: null,
          right: null,
        },
      },
      result: 7,
    },
    {
      tree: {
        value: 1,
        left: null,
        right: null,
      },
      result: 1,
    },
    {
      tree: {
        value: 2,
        left: null,
        right: null,
      },
      result: 2,
    },
    {
      tree: {
        value: 5,
        left: {
          value: 1,
          left: null,
          right: null,
        },
        right: {
          value: 2,
          left: null,
          right: null,
        },
      },
      result: 8,
    },
    {
      tree: {
        value: 1,
        left: {
          value: 4,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: {
            value: 2,
            left: null,
            right: null,
          },
        },
        right: {
          value: 5,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: {
            value: 2,
            left: null,
            right: null,
          },
        },
      },
      result: 16,
    },
  ];

  test("should return the number of decorations", () => {
    checkDecoration.forEach((check) => {
      expect(countDecorations(check.tree)).toBe(check.result);
    });
  });
});
