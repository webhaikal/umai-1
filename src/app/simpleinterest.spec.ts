describe('Simple Interest Test', () => {
  it('If $15,000 principle, 3% interest, and 7 year period should equal to ', () => expect((15000*(1+(3/100)*7))).toBe(18150));
});