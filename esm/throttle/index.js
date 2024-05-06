function throttle(_ref) {
  var _this = this;
  var fn = _ref.fn,
    _ref$wait = _ref.wait,
    wait = _ref$wait === void 0 ? 100 : _ref$wait;
  var isThrottled = false;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!isThrottled) {
      isThrottled = true;
      setTimeout(function () {
        fn.apply(_this, args);
        isThrottled = false;
      }, wait);
    }
  };
}
export default throttle;