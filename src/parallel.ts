interface jobArg {
  (): Promise<number>;
}

export class Parallel {
  constructor(n: number) {
    this.threads = n;
  }

  private readonly threads: number;

  private readonly result: number[] = [];

  async jobs(...args: jobArg[]) {
    const jobs = [...args];

    return new Promise((resolve) => {
      for (let i = 0; i < this.threads; i += 1) {
        run.call(this);
      }
      async function run(this: Parallel): Promise<void> {
        const job = jobs.shift();
        if (job) {
          job().then((value) => {
            this.result.push(value);
            if (this.result.length === args.length) {
              resolve(this.result);
            }
            run.call(this);
          });
        }
      }
    });
  }
}
