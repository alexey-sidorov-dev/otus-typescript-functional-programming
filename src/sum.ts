export function sum(n?: number) {
  const value: number = n ?? 0;

  function summator(num: number) {
    return sum(value + num);
  }

  summator.toString = (): number => value;

  return summator;
}
