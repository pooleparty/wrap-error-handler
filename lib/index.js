export default function wrapErrorHandler(fn) {
  const doWrapErrorHandler = (req, res, next) => {
    try {
      Promise.resolve(fn(req, res, next)).catch(next);
    } catch (e) {
      next(e);
    }
  };
  return doWrapErrorHandler;
}
