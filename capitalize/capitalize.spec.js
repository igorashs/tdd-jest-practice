import capitalize from './capitalize';

it('returns a string with the first character capitalized', () => {
  expect(capitalize('hello there')).toBe('Hello there');
});

it('returns an empty string', () => {
  expect(capitalize('')).toBe('');
});

it('works with undefined', () => {
  expect(capitalize(undefined)).toBe('');
});

it('works with null', () => {
  expect(capitalize(null)).toBe('');
});

it('returns initial string when first character is not a letter', () => {
  expect(capitalize('1. do something')).toBe('1. do something');
});
