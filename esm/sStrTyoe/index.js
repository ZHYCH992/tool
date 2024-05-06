function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * 判断选择器类型
 */
var sStrType = function sStrType(str) {
  if (typeof str !== 'string') {
    console.error('Argument must be a string!');
    return false;
  }
  str = str.trim();
  var isUpperCase = function isUpperCase(letter) {
      if (letter >= 'A' && letter <= 'Z') {
        return true;
      }
    },
    type = '';
  if (str) {
    if (str.includes(' ')) {
      type = 'level';
    } else {
      if (str.startsWith('#')) {
        type = 'id';
      } else if (str.startsWith('.')) {
        type = 'class';
      } else if (str.startsWith('[') && str.endsWith(']')) {
        type = 'name';
      } else if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(str) || _toConsumableArray(str).every(function (i) {
        return isUpperCase(i);
      })) {
        type = 'node';
      }
    }
  }
  return type;
};
export default sStrType;