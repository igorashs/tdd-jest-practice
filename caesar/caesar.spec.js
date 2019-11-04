import caesar from './caesar';

it('text is shifted with key = 1', () => {
  expect(caesar('abcd', 1)).toBe('bcde');
});

it('text is returned with key = 0 or empty', () => {
  expect(caesar('hello', 0)).toBe('hello');
  expect(caesar('there')).toBe('there');
});

it('text is wrapped', () => {
  expect(caesar('zoo', 1)).toBe('app');
});

it('text keeps the same case', () => {
  expect(caesar('ZoO'), 2).toBe('BqQ');
});

it('text keeps punctuation', () => {
  expect(caesar("Ohm, i don't know!"), 1).toBe("Pin, j epo'u lopx!");
});

it('returns an empty string with falsy params', () => {
  expect(caesar('')).toBe('');
  expect(caesar(null, null)).toBe('');
  expect(caesar()).toBe('');
});
