export class StringCalculator {
  constructor() {}
  public add(str: String): number {
    let tot = 0;
    let separators = ['\n', ','];

    if (str.startsWith('//')) {
      const endIndex = str.indexOf('\n');

      const new_separators = str.substring(2, endIndex).split('');

      console.log('new separators', new_separators);

      separators = [...separators, ...new_separators];

      str = str.substring(endIndex + 1);
    }

    const chars = str.split(new RegExp(`[${separators.join('')}]`));

    console.log('The chars are', chars);

    tot = chars.reduce((tot, curr) => tot + this.charToInt(curr), 0);

    return tot;
  }

  public charToInt(char: string) {
    if (!char.trim()) return 0;

    let tot = Number(char);

    return tot;
  }
}
