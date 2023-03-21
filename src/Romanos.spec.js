import ToRomano from "./Romanos.js";

describe("Romanos", () => {
  it("deberia mostrar el numero 1 en Romano", () => {
    expect(ToRomano(1)).toEqual("I");
  });
});

describe("Romanos", () => {
    it("deberia mostrar el numero 4 en Romano", () => {
      expect(ToRomano(4)).toEqual("IV");
    });
  });