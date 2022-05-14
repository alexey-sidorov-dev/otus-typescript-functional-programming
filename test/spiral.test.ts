import { spiral, rotateMatrix } from "../src/spiral";

describe("spiral", () => {
  it("should tranform matrix into arrray", () => {
    const matrix = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
    ];
    const expected = [
      0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11,
    ];

    expect(spiral(matrix)).toStrictEqual(expected);
  });
});

describe("rotateMatrix", () => {
  it("should rotate matrix to right", () => {
    const matrix = [
      [0, 1, 2],
      [3, 4, 5],
    ];

    const expected = [
      [3, 0],
      [4, 1],
      [5, 2],
    ];

    expect(rotateMatrix(matrix)).toStrictEqual(expected);
  });

  it("should rotate matrix to left", () => {
    const matrix = [
      [0, 1, 2],
      [3, 4, 5],
    ];

    const expected = [
      [2, 5],
      [1, 4],
      [0, 3],
    ];

    expect(rotateMatrix(matrix, true)).toStrictEqual(expected);
  });

  it("should correct rotate array", () => {
    const matrix = [[0, 1, 2]];

    const expected = [[2], [1], [0]];

    expect(rotateMatrix(matrix, true)).toStrictEqual(expected);
  });

  it("should correct process empty matrix", () => {
    const matrix = [[]];

    const expected = [[]];

    expect(rotateMatrix(matrix, true)).toStrictEqual(expected);
  });
});
