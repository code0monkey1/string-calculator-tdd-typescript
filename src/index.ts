export class StringCalculator {
  constructor() {}
  public add(str: string): number {
    let separators: string[] = [];

    if (this.hasMultipleSeparators(str)) {
      separators = this.getSeparators(str);
      str = this.extractStringWithoutSeparators(str);
    } else if (this.hasSingleSeparator(str)) {
      separators = ['\n', ',', str.charAt(2)];
      str = this.extractStringWithoutSeparators(str);
    }
    console.log('separators', separators);
    const chars = this.getChars(str, separators);

    if (this.hasNegative(chars))
      throw new Error(
        'negatives not allowed: ' + this.getNegative(chars).join(' ')
      );

    let sum = this.getSum(chars);

    return sum;
  }

  private getChars(str: string, separators: string[]) {
    const delimiterPattern = new RegExp(
      separators.map((d) => `\\${d}`).join('|'),
      'g'
    );

    const chars = str.split(delimiterPattern).filter((item) => item !== '');

    return chars;
  }
  private getSum(chars: string[]) {
    const sum = chars
      .filter((char) => Number(char) <= 1000)
      .reduce((tot, curr) => tot + this.charToInt(curr), 0);
    return sum;
  }

  private extractStringWithoutSeparators(str: string): string {
    return str.substring(str.indexOf('\n') + 1);
  }

  private hasSingleSeparator(str: string) {
    return str.startsWith('//');
  }

  private hasMultipleSeparators(str: string) {
    return str.startsWith('//[');
  }

  private hasNegative(chars: string[]) {
    return chars.some((char) => Number(char) < 0);
  }

  private getNegative(chars: string[]) {
    return chars.filter((char) => Number(char) < 0);
  }

  public charToInt(char: string) {
    if (!char.trim()) return 0;

    let tot = Number(char);

    return tot;
  }

  public getSeparators(str: string): string[] {
    let separators = ['\n', ','];

    const pattern = /\[(.*?)\]/g;
    const matches = [];

    let match;
    while ((match = pattern.exec(str)) !== null) {
      matches.push(match[1]);
    }
    return [...separators, ...matches];
  }

  public getSeparator(str: string): string[] {
    let separators = ['\n', ','];

    const separator = str.charAt(2);

    return [...separators, separator];
  }
}
