import { Parallel } from "../src/parallel";

describe("Parallel", () => {
  it("returns result of 2 threads", async () => {
    const runner2 = new Parallel(2);
    const result = await runner2.jobs(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 10, 1);
        }),
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 50, 2);
        }),
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 20, 3);
        }),
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 90, 4);
        }),
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 30, 5);
        })
    );

    expect(result).toStrictEqual([1, 3, 2, 5, 4]);
  });

  it("returns result of 5 threads", async () => {
    const runner5 = new Parallel(5);
    const result = await runner5.jobs(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 10, 1);
        }),
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 50, 2);
        }),
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 20, 3);
        }),
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 90, 4);
        }),
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 30, 5);
        })
    );

    expect(result).toStrictEqual([1, 3, 5, 2, 4]);
  });
});
