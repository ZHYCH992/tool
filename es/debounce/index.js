function debounce(_ref) {
  var fn = _ref.fn,
    _ref$wait = _ref.wait,
    wait = _ref$wait === void 0 ? 100 : _ref$wait;
  if (typeof fn !== 'function' || !fn) {
    console.error('debounce: fn Parameter error');
    return;
  }
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.apply(context, args);
    }, wait);
  };
}
export default debounce;