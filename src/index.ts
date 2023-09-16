export class StringCalculator {
  constructor() {}
  public add(str: String): number {
    let tot = 0;

    const chars = str.split(/[,\n]/);

    tot = chars.reduce((tot, curr) => tot + this.charToInt(curr), 0);

    return tot;
  }

  public charToInt(char: string) {
    if (!char.trim()) return 0;

    let tot = Number(char);

    return tot;
  }
}
