export class StringCalculator {
  constructor() {}
  public add(str: string): number {
    let separators = this.getSeparators(str);

    if (this.hasCustomSeparators(str))
      str = this.extractStringWithoutSeparators(str);

    const chars = this.getChars(str, separators);

    if (this.hasNegative(chars))
      throw new Error(
        'negatives not allowed: ' + this.getNegative(chars).join(' ')
      );

    let sum = this.getSum(chars);

    return sum;
  }

  private getChars(str: string, separators: string[]) {
    return str.split(new RegExp(`[${separators.join('')}]`));
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

  private hasCustomSeparators(str: string) {
    return str.startsWith('//');
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

    if (this.hasCustomSeparators(str)) {
      const endIndex = str.indexOf('\n');

      const new_separators = str.substring(2, endIndex).split('');

      separators = [...separators, ...new_separators];
    }

    return separators;
  }
}
