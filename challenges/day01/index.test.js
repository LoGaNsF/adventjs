import contarOvejas from './index';

describe("#01 - contarOvejas", () => {
  const allSheeps = [
    { name: "Noa", color: "azul" },
    { name: "Euge", color: "rojo" },
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
    { name: "AAAAAaaaaa", color: "rojo" },
    { name: "Nnnnnnnn", color: "rojo" },
  ];

  const filteredSheeps = [
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
  ];

  it("should filter sheeps", () => {
    expect(contarOvejas(allSheeps)).toStrictEqual(filteredSheeps);
  });
});
