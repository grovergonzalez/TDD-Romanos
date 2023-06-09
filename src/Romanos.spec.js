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

describe("Romanos", () => {
    it("deberia mostrar el numero 5 en Romano", () => {
      expect(ToRomano(5)).toEqual("V");
    });
});

describe("Romanos", () => {
    it("deberia mostrar el numero 9 en Romano", () => {
      expect(ToRomano(9)).toEqual("IX");
    });
});

describe("Romanos", () => {
    it("deberia mostrar el numero 10 en Romano", () => {
      expect(ToRomano(10)).toEqual("X");
    });
});

describe("Romanos", () => {
    it("deberia mostrar el numero 40 en Romanos", () => {
      expect(ToRomano(40)).toEqual("XL");
    });
});

describe("Romanos", () => {
    it("deberia mostrar el numero 50 en Romanos", () => {
      expect(ToRomano(50)).toEqual("L");
    });
});

describe("Romanos", () => {
    it("deberia mostrar el numero 90 en Romanos", () => {
      expect(ToRomano(90)).toEqual("XC");
    });
});

describe("Romanos", () => {
    it("deberia mostrar el numero 100 en Romanos", () => {
      expect(ToRomano(100)).toEqual("C");
    });
});