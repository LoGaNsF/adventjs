import contains from "./index";

describe("#07 - contains", () => {
  it("should contains the product", () => {
    const store = {
      estanteria1: {
        cajon1: {
          producto1: "coca-cola",
          producto2: "fanta",
          producto3: "sprite",
        },
      },
      estanteria2: {
        cajon1: "vacio",
        cajon2: {
          producto1: "pantalones",
          producto2: "camiseta"
        },
      },
    };

    expect(contains(store, 'camiseta')).toBeTruthy();
  });

  it("should not contains the product", () => {
    const store = {
      baul: {
        fondo: {
          objeto: "cd-rom",
          "otro-objeto": "disquette",
          "otra-cosa": "mando",
        },
      },
    };

    expect(contains(store, 'gameboy')).toBeFalsy();
  });
});
