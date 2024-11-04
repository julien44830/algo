import { fibonacci } from "./fibonacci";

describe("fibonacci", () => {
  it("should return the correct Fibonacci number at the given position", () => {
    expect(fibonacci(5)).toBe(5);
  });

  it("should return 0 for position 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("should return 1 for position 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  it("should throw an error if a non-number is passed", () => {
    expect(() => fibonacci("a" as any)).toThrow(TypeError);
    expect(() => fibonacci("a" as any)).toThrow("Le paramètre doit être un nombre");
  });
});
