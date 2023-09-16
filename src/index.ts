export class StringCalculator {
  constructor() {}
  public add(str: String): number {
    let tot = 0;
    let separators: string[] = [];

    if (str.startsWith('//')) {
      const endIndex = str.indexOf('\n');

      separators = str.substring(2, endIndex).split('');

      console.log('separators', separators);
    }
    console.log(str);
    const chars = str.split(/`[,${separators}\n]`/);

    tot = chars.reduce((tot, curr) => tot + this.charToInt(curr), 0);

    return tot;
  }

  public charToInt(char: string) {
    if (!char.trim()) return 0;

    let tot = Number(char);

    return tot;
  }
}
