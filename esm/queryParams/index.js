var _class;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var queryParams = /*#__PURE__*/function () {
  function queryParams() {
    _classCallCheck(this, queryParams);
  }
  _createClass(queryParams, null, [{
    key: "get",
    value: function get(key) {
      return this.userParams.get(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.userParams.set(key, value);
      this.userUrl.search = this.userParams.toString();
      history.replaceState(null, '', this.userUrl.href);
    }
  }, {
    key: "add",
    value: function add(key, value) {
      this.userParams.append(key, value);
      this.userUrl.search = this.userParams.toString();
      history.replaceState(null, '', this.userUrl.href);
    }
  }, {
    key: "remove",
    value: function remove(key) {
      this.userParams.delete(key);
      this.userUrl.search = this.userParams.toString();
      history.replaceState(null, '', this.userUrl.href);
    }
  }]);
  return queryParams;
}();
_class = queryParams;
_defineProperty(queryParams, "userUrl", new URL(window.location.href));
_defineProperty(queryParams, "userParams", new URLSearchParams(_class.userUrl.search));
export default queryParams;