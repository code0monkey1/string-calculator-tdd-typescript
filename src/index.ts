export class StringCalculator {
  constructor() {}
  public add(str: string): number {
    let tot = 0;
    let separators = this.getSeparators(str);

    if (this.hasCustomSeparators(str))
      str = str.substring(str.indexOf('\n') + 1);

    const chars = str.split(new RegExp(`[${separators.join('')}]`));

    console.log('The chars are', chars);

    tot = chars.reduce((tot, curr) => tot + this.charToInt(curr), 0);

    return tot;
  }

  private hasCustomSeparators(str: string) {
    return str.startsWith('//');
  }

  public charToInt(char: string) {
    if (!char.trim()) return 0;

    let tot = Number(char);

    return tot;
  }

  public getSeparators(str: string): string[] {
    let separators = ['\n', ','];

    if (str.startsWith('//')) {
      const endIndex = str.indexOf('\n');

      const new_separators = str.substring(2, endIndex).split('');

      separators = [...separators, ...new_separators];
    }

    return separators;
  }
}
