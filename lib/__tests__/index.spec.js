import wrapErrorHandler from '../index';

describe('wrapErrorHandler tests', () => {
  test('should resolve a given function', (done) => {
    const fn = (req, res, next) => {
      next();
    };

    wrapErrorHandler(fn)(null, null, (error) => {
      expect(error).toBeUndefined();
      done();
    });
  });

  test('should catch errors and pass them to next()', (done) => {
    const fn = () => {
      throw new Error();
    };

    wrapErrorHandler(fn)(null, null, (error) => {
      expect(error).toBeDefined();
      done();
    });
  });

  test('should catch errors inside a Promise and pass them to next()', (done) => {
    const fn = () =>
      new Promise(() => {
        throw new Error();
      });

    wrapErrorHandler(fn)(null, null, (error) => {
      expect(error).toBeDefined();
      done();
    });
  });
});
