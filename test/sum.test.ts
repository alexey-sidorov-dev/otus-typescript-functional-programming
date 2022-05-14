import { sum } from "../src/sum";

describe("sum", () => {
  it("should return 0 for sum()", () => {
    expect(sum().toString()).toBe(0);
  });

  it("should return expected values for chaining calls", () => {
    const s = sum();
    expect(s(1).toString()).toBe(1);
    expect(s(1)(2).toString()).toBe(3);
    expect(s(3)(4)(5).toString()).toBe(12);
  });

  it("should store and return expected values", () => {
    const s3 = sum(3);
    expect(s3(5).toString()).toBe(8);
    expect(s3(6).toString()).toBe(9);
  });
});
