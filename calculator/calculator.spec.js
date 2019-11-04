import calculator from './calculator';

it('operations work properly', () => {
  expect(calculator.add(60, 9)).toBe(69);
  expect(calculator.subtract(140, 20)).toBe(120);
  expect(calculator.divide(81, 3)).toBe(27);
  expect(calculator.multiply(4, 4)).toBe(16);
});

it('works with numbers as strings', () => {
  expect(calculator.add(60, '9')).toBe(69);
  expect(calculator.add([2], [4])).toBe(6);
  expect(calculator.subtract('140', 20)).toBe(120);
  expect(calculator.divide('81', '3')).toBe(27);
  expect(calculator.multiply(4, '4')).toBe(16);
});

it('returns error with NaN params', () => {
  expect(calculator.add(60, 'hello')).toBe('Error');
  expect(calculator.subtract({ n: 20 }, 6)).toBe('Error');
  expect(calculator.divide([16, 23], [4])).toBe('Error');
  expect(calculator.multiply({ three: 3 }, ['4'])).toBe('Error');
});
