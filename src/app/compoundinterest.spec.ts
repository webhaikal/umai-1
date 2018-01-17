describe('Compound Interest Test', () => {
  it('If $15,000 principle, 3% interest, compound frequency of 12, and 7 year period should equal to ', () => expect(+(15000 * Math.pow(1+(3/(100*12)), 12*7)).toFixed(2)).toBe(18500.32));
});