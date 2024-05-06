import sClone from "../sClone/index.js";
import sExpires from "../sExpires/index.js";
import sExtend from "../sExtend/index.js";
import sIsEmpty from "../sIsEmpty/index.js";
import sType from "../sType/index.js";
/*!
 * 定义localStorage本地存储
 * 支持set、get、del、clear、key五个方法
 * set方法支持options参数，type和expires
 * 默认过期时间是0，即永不过期
 */
var sLocalStorage = {
  set: function set(key) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      type: 'd',
      expires: 0,
      cover: true
    };
    if (typeof key !== 'string' && !key) {
      return false;
    }
    var newValue = sClone(value),
      type = sType(value),
      filterProps = function filterProps(obj) {
        Object.keys(obj).forEach(function (k) {
          var val = obj[k];
          (sType(val) === 'Array' || sType(val) === 'Object') && filterProps(val);
          (sType(val).includes('HTML') || sType(val) === 'Function') && delete obj[k];
        });
        return obj;
      };
    if ((type === 'Array' || type === 'Object') && !sIsEmpty(newValue)) {
      filterProps(newValue);
    }
    var expires = options.expires !== 0 ? sExpires(options.type, options.expires) : 0,
      oldValue = sLocalStorage.get(key),
      valueExp = {
        data: !options.cover && sLocalStorage.get(key) ? sExtend(oldValue, newValue) : newValue,
        expires: expires
      };
    if ((options.expires < 0 || newValue === null) && this.get(key)) {
      this.del(key);
    } else {
      window.localStorage.setItem(key, JSON.stringify(valueExp));
    }
    return this;
  },
  get: function get(key) {
    if (sIsEmpty(key)) {
      return false;
    }
    var now = new Date().toUTCString(),
      valueExp = JSON.parse(window.localStorage.getItem(key));
    if (valueExp) {
      if (valueExp.expires === 0 || now <= valueExp.expires) {
        return valueExp.data;
      } else {
        window.localStorage.removeItem(key);
        return null;
      }
    } else {
      return null;
    }
  },
  remove: function remove(key) {
    if (sIsEmpty(key)) {
      return false;
    }
    var arr = [];
    if (Array.isArray(key)) {
      arr = key;
    } else {
      arr.push(key);
    }
    arr.forEach(function (k) {
      window.localStorage.removeItem(k);
    });
    return this;
  },
  key: function key(num) {
    if (typeof num !== 'number') {
      return false;
    }
    return window.localStorage.key(num);
  },
  clear: function clear() {
    window.localStorage.clear();
    return this;
  }
};
export default sLocalStorage;