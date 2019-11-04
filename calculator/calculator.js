export default {
  validateParams(a, b) {
    const x = +a;
    const y = +b;
    if (x && y && typeof x === 'number' && typeof y === 'number') {
      return [x, y];
    }
    throw new Error('Error');
  },

  add(a, b) {
    try {
      const [x, y] = this.validateParams(a, b);
      return x + y;
    } catch (e) {
      return e.message;
    }
  },

  subtract(a, b) {
    try {
      const [x, y] = this.validateParams(a, b);
      return x - y;
    } catch (e) {
      return e.message;
    }
  },

  divide(a, b) {
    try {
      const [x, y] = this.validateParams(a, b);
      return x / y;
    } catch (e) {
      return e.message;
    }
  },

  multiply(a, b) {
    try {
      const [x, y] = this.validateParams(a, b);
      return x * y;
    } catch (e) {
      return e.message;
    }
  }
};
