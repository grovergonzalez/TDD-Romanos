import ToRomano from "./Romanos.js";

describe("Romanos", () => {
  it("deberia mostrar el numero 1 en Romano", () => {
    expect(ToRomano(1)).toEqual("I");
  });
});
