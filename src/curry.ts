export function curry(func: (...args: number[]) => number): any {
  return function curriedFunc(this: any, ...args1: number[]) {
    if (args1.length >= func.length) {
      return func.apply(this, args1);
    }
    return (...args2: number[]) => curriedFunc.apply(this, args1.concat(args2));
  };
}
