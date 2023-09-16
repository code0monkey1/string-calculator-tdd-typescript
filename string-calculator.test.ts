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

        const expected = output;

        const entry = input;

        //act
        const res = sut.add(entry);

        //assert
        expect(res).toBe(expected);
      }
    );
  });

  describe('Disallow  Negatives', () => {});
});
