export class StringCalculator {
  constructor() {}

  public add(str: string): number {
    let separators = ['\n', ','];

    if (this.hasMultipleSeparators(str)) {
      const separatorString = str.substring(2, str.indexOf('\n'));
      console.log('separator string', separatorString);

      const separator = str.substring(3, str.indexOf(']'));

      str = this.extractStringWithoutSeparators(str);

      const splittedChars = str.split(separator);

      return this.getSum(splittedChars);
    } else if (this.hasSingleSeparator(str)) {
      separators = [...separators, str.charAt(2)];
      str = this.extractStringWithoutSeparators(str);
    }

    const chars = this.getChars(str, separators);

    if (this.hasNegative(chars))
      throw new Error(
        'negatives not allowed: ' + this.getNegative(chars).join(' ')
      );

    let sum = this.getSum(chars);

    return sum;
  }

  private getChars(str: string, separators: string[]) {
    for (let c of separators) str = str.split(c).join(',');

    return str.split(',');
  }
  private getSum(chars: string[]) {
    const sum = chars
      .filter((char) => Number(char) <= 1000)
      .reduce((tot, curr) => tot + this.charToInt(curr), 0);
    return sum;
  }

  private hasMultipleSeparators(str: string) {
    return str.startsWith('//[');
  }

  private extractStringWithoutSeparators(str: string): string {
    return str.substring(str.indexOf('\n') + 1);
  }

  private hasSingleSeparator(str: string) {
    return str.startsWith('//');
  }

  private hasNegative(chars: string[]) {
    return chars.some((char) => Number(char) < 0);
  }

  private getSeparatorString(head: string, str: string) {
    if (str.indexOf('/n') === -1) return ' ';
    return str.substring(head.length, str.indexOf('/n'));
  }

  private getNegative(chars: string[]) {
    return chars.filter((char) => Number(char) < 0);
  }

  public charToInt(char: string) {
    if (!char.trim()) return 0;

    let tot = Number(char);

    return tot;
  }

  public getSeparator(str: string): string[] {
    let separators = ['\n', ','];

    const separator = str.charAt(2);

    return [...separators, separator];
  }
}
