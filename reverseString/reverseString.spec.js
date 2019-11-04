import reverseString from './reverseString';

it('returns reversed string', () => {
  expect(reverseString('hello there')).toBe('ereht olleh');
});

it('works with falsy values', () => {
  expect(reverseString(undefined)).toBe('');
});
