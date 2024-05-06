function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var sCookie = /*#__PURE__*/function () {
  function sCookie() {
    _classCallCheck(this, sCookie);
  }
  _createClass(sCookie, null, [{
    key: "set",
    value: function set(name, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        type: 'd',
        expires: 365
      };
      if (!name) {
        console.error('The name of cookie can not be empty!');
        return false;
      }
      var now = new Date(),
        opt = Object.assign({}, options),
        string = opt.path ? ';path=' + opt.path : '';
      string += opt.domain ? ';domain=' + opt.domain : '';
      string += opt.secure ? ';secure=' + opt.secure : '';
      string += opt.sameSite ? ';sameSite=' + opt.sameSite : '';
      if (opt.type === 'second' || opt.type === 's') {
        now.setSeconds(now.getSeconds() + ~~opt.expires);
        opt.expires = now.toUTCString();
      } else if (opt.type === 'minute' || opt.type === 'm') {
        now.setMinutes(now.getMinutes() + ~~opt.expires);
        opt.expires = now.toUTCString();
      } else if (opt.type === 'hour' || opt.type === 'h') {
        now.setHours(now.getHours() + ~~opt.expires);
        opt.expires = now.toUTCString();
      } else {
        now.setDate(now.getDate() + ~~opt.expires);
        opt.expires = now.toUTCString();
      }
      document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + opt.expires + string;
    }
  }, {
    key: "get",
    value: function get(name) {
      var cookieArr = document.cookie.replace(/;\s*/, ';').split(';');
      var value = '';
      for (var i = 0; i < cookieArr.length; i++) {
        var k = cookieArr[i].split('=')[0],
          v = cookieArr[i].split('=')[1];
        if (k === name) {
          value = v;
          break;
        }
      }
      if (value) {
        return decodeURIComponent(value);
      } else {
        return false;
      }
    }
  }, {
    key: "remove",
    value: function remove(name) {
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  }]);
  return sCookie;
}();
export default sCookie;