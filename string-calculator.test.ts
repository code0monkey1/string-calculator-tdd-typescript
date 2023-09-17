import { StringCalculator } from './src';

describe('String Calculator', () => {
  describe('Single Input', () => {
    it.each([
      { input: '', output: 0 },
      { input: '1', output: 1 },
      { input: '9', output: 9 },
    ])('will give output $output when input is $input', ({ input, output }) => {
      // arrange

      //sut
      const sut = new StringCalculator();

      const expected = output;

      const entry = input;

      //act
      const res = sut.add(entry);

      //assert
      expect(res).toBe(expected);
    });
  });

  describe('Double Input', () => {
    it.each([
      { input: ',', output: 0 },
      { input: '1,2', output: 3 },
      { input: '9,10', output: 19 },
    ])('will give output $output when input is $input', ({ input, output }) => {
      // arrange

      //sut
      const sut = new StringCalculator();

      const expected = output;

      const entry = input;

      //act
      const res = sut.add(entry);

      //assert
      expect(res).toBe(expected);
    });
  });
  describe('Arbitrary Input Size', () => {
    it.each([
      { input: '1, ,3', output: 4 },
      { input: '1,20 ,60 ,  2', output: 83 },
      { input: '1,2,3,4,5,6,7,8,9', output: 45 },
    ])('will give output $output when input is $input', ({ input, output }) => {
      // arrange

      //sut
      const sut = new StringCalculator();

      const expected = output;

      const entry = input;

      //act
      const res = sut.add(entry);

      //assert
      expect(res).toBe(expected);
    });
  });

  describe('Newline separator', () => {
    it.each([
      { input: '1, \n3', output: 4 },
      { input: '1\n2,3', output: 6 },
      { input: '1,2,3,4,5\n6,7,8\n9', output: 45 },
    ])('will give output $output when input is $input', ({ input, output }) => {
      // arrange

      //sut
      const sut = new StringCalculator();

      const expected = output;

      const entry = input;

      //act
      const res = sut.add(entry);

      //assert
      expect(res).toBe(expected);
    });
  });

  describe('Custom Separators', () => {
    it.each([{ input: '//;\n1;2', output: 3 }])(
      'will give output $output when input is $input',
      ({ input, output }) => {
        // arrange

        //sut
        const sut = new StringCalculator();

        //act
        const res = sut.add(input);

        //assert
        expect(res).toBe(output);
      }
    );
  });

  describe('Disallow  Negatives', () => {
    it.each([
      { input: '1,-1,-20,-3', output: '-1 -20 -3' },
      { input: '1,-5\n-20', output: '-5 -20' },
    ])('throws error Negatives Not Allowed', ({ input, output }) => {
      //sut
      const sut = new StringCalculator();

      //act

      //assert
      expect(() => {
        sut.add(input);
      }).toThrowError(`negatives not allowed: ${output}`);
    });
  });

  describe('Disallow numbers greater than 1000', () => {
    it.each([{ input: '1001, 2', output: 2 }])(
      'gives output: $output and ignores numbers greater than 1000 in input $input',
      ({ input, output }) => {
        //sut
        const sut = new StringCalculator();

        //act
        const res = sut.add(input);

        //assert
        expect(res).toBe(output);
      }
    );
  });

  describe('Arbitrary-length separators', () => {
    it('return the sum to be 6 , when given "//[***]\n1***2***3"', () => {
      //sut
      const sut = new StringCalculator();

      //act
      const res = sut.add('//[***]\n1***2***3');

      //assert
      expect(res).toBe(6);
    });
  });

  test('getChars', () => {
    let str = 'a,b,c';
    let separators=["***","*","___"]
   
    separators.forEach(s => {
      str = 
    })
    console.log('result', result);
  });
 public replaceAllStrings = (
    str: string,
    to_replace: string,
    replace_with: string
  ) => {
    while (str.indexOf(to_replace) !== -1) {
      str.replace(to_replace, replace_with);
    }

    return str;
  };

  test('getSeparators', () => {
    const inputString = '//[***][__][*]';
    const pattern = /\[(.*?)\]/g;
    const matches = [];

    let match;
    while ((match = pattern.exec(inputString)) !== null) {
      matches.push(match[1]);
    }

    console.log('Matches', matches);
  });
});
