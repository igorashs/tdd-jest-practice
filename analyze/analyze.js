export default function analyze(nArr) {
  function average(arr) {
    return {
      average: arr.reduce((prev, cur) => prev + cur, 0) / arr.length
    };
  }

  function minmax([...arr]) {
    arr.sort((a, b) => a - b);
    return { min: arr.shift(), max: arr.pop() };
  }

  if (nArr && nArr.length > 0) {
    return {
      ...average(nArr),
      ...minmax(nArr),
      length: nArr.length
    };
  }
  return {};
}
