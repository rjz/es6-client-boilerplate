import arithmetic from './arithmetic';

describe('arithmetic', () => {
  describe('.sum()', () => {
    it('adds two numbers', () => {
      expect(arithmetic.sum(1, 2)).toBe(3);
    });
  });

  describe('.difference()', () => {
    it('subtracts two numbers', () => {
      expect(arithmetic.difference(1, 2)).toBe(-1);
    });
  });

});


