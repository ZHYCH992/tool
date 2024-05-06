function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import sClone from "../sClone/index.js";
import sType from "../sType/index.js";
/**
 * 定义合并属性递归函数
 */
var sMerge = function sMerge(target, source) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    arrAppend: false,
    clone: false,
    attrAppend: true
  };
  if (_typeof(target) != 'object' || _typeof(source) != 'object') {
    return source;
  }
  if (!source) {
    return target;
  }
  var obj = option.copy ? sClone(target) : target;
  for (var k in source) {
    if (source.hasOwnProperty(k) && obj.hasOwnProperty(k)) {
      if (!obj[k]) {
        obj[k] = source[k];
      } else {
        if (sType(source[k]) != 'Array') {
          obj[k] = sMerge(obj[k], source[k], option);
        } else {
          if (option.arrAppend) {
            var _obj$k;
            (_obj$k = obj[k]).push.apply(_obj$k, _toConsumableArray(source[k]));
          } else {
            obj[k] = source[k];
          }
        }
      }
    } else if (source.hasOwnProperty(k) && !obj.hasOwnProperty(k) && option.attrAppend) {
      obj[k] = source[k];
    }
  }
  return obj;
};
export default sMerge;