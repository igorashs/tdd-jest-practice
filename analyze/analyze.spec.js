import analyze from './analyze';

it('returns an resolved object', () => {
  const resObj = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  };
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual(resObj);
});

it('returns an empty object with empty param', () => {
  expect(analyze()).toEqual({});
  expect(analyze([])).toEqual({});
  expect(analyze(null)).toEqual({});
});
