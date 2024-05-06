var _class;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var sLoading = /*#__PURE__*/_createClass(function sLoading() {
  _classCallCheck(this, sLoading);
});
_class = sLoading;
_defineProperty(sLoading, "animtion", 'flippers');
_defineProperty(sLoading, "time", 1500);
_defineProperty(sLoading, "element", document.body);
_defineProperty(sLoading, "hidenTiming", null);
_defineProperty(sLoading, "autoHidenTiming", null);
_defineProperty(sLoading, "loadingDom", null);
_defineProperty(sLoading, "_animtionType", ['flippers', 'pong']);
_defineProperty(sLoading, "_show", function () {
  _class.loadingDom.style.position = _class.element === document.body ? 'fixed' : 'absolute';
  _class.loadingDom.style.display = 'flex';
  _class.loadingDom.classList.remove('hiden');
});
_defineProperty(sLoading, "_hiden", function () {
  _class.element.children.zLoading.classList.add('hiden');
  _class.hidenTiming && clearTimeout(_class.hidenTiming);
  _class.hidenTiming = setTimeout(function () {
    _class.element.children.zLoading.style.display = 'none';
  }, 1000);
});
_defineProperty(sLoading, "_createLoadingElement", function () {
  var html = "<section id=\"zLoading\"><div class=\"".concat(_class.animtion, "\"><div></div><div></div><div></div><div></div><div></div></div></section>");
  !_class.element.children.zLoading && _class.element.insertAdjacentHTML('beforeend', html);
  _class.loadingDom = _class.element.children.zLoading;
});
_defineProperty(sLoading, "_checkParams", function (_ref) {
  var _ref$animtion = _ref.animtion,
    animtion = _ref$animtion === void 0 ? _class.animtion : _ref$animtion,
    _ref$time = _ref.time,
    time = _ref$time === void 0 ? _class.time : _ref$time,
    _ref$element = _ref.element,
    element = _ref$element === void 0 ? _class.element : _ref$element;
  if (!_class._animtionType.includes(animtion)) {
    console.error('sLoading:animtion is error');
    return;
  }
  if (_typeof(element) !== 'object') {
    console.error('sLoading:element is error');
    return;
  }
  if (typeof time !== 'number') {
    console.error('sLoading:time is error');
    return;
  }
  _class.time = time;
  _class.element = element;
  _class.loadingDom = _class.element.children.zLoading;
  if (animtion && _class.animtion !== animtion) {
    _class.animtion = animtion;
    _class.loadingDom.children[0].className = animtion;
  }
});
_defineProperty(sLoading, "show", function (obj) {
  obj && _class._checkParams(obj);
  _class._createLoadingElement();
  _class._show();
});
_defineProperty(sLoading, "hiden", function (obj) {
  obj && _class._checkParams(obj);
  if (!_class.element.children.zLoading) {
    console.error('sLoading:zLoading is not defined');
    return;
  }
  _class._hiden();
});
_defineProperty(sLoading, "auto", function (obj) {
  obj && _class._checkParams(obj);
  _class._createLoadingElement();
  _class._show();
  _class.autoHidenTiming && clearTimeout(_class.autoHidenTiming);
  _class.autoHidenTiming = setTimeout(_class._hiden, _class.time);
});
export default sLoading;