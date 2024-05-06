import sClone from '../sClone/index.js';
import sExpires from '../sExpires/index.js';
import sExtend from '../sExtend/index.js';
import sIsEmpty from '../sIsEmpty/index.js';
import sType from '../sType/index.js';
/*!
 * 定义localStorage本地存储
 * 支持set、get、del、clear、key五个方法
 * set方法支持options参数，type和expires
 * 默认过期时间是0，即永不过期
 */
const sLocalStorage = {
  set: function (
    key,
    value = '',
    options = { type: 'd', expires: 0, cover: true },
  ) {
    if (typeof key !== 'string' && !key) {
      return false;
    }
    let newValue = sClone(value),
      type = sType(value),
      filterProps = (obj) => {
        Object.keys(obj).forEach((k) => {
          let val = obj[k];
          (sType(val) === 'Array' || sType(val) === 'Object') &&
            filterProps(val);
          (sType(val).includes('HTML') || sType(val) === 'Function') &&
            delete obj[k];
        });
        return obj;
      };
    if ((type === 'Array' || type === 'Object') && !sIsEmpty(newValue)) {
      filterProps(newValue);
    }
    let expires =
        options.expires !== 0 ? sExpires(options.type, options.expires) : 0,
      oldValue = sLocalStorage.get(key),
      valueExp = {
        data:
          !options.cover && sLocalStorage.get(key)
            ? sExtend(oldValue, newValue)
            : newValue,
        expires: expires,
      };
    if ((options.expires < 0 || newValue === null) && this.get(key)) {
      this.del(key);
    } else {
      window.localStorage.setItem(key, JSON.stringify(valueExp));
    }
    return this;
  },
  get: function (key) {
    if (sIsEmpty(key)) {
      return false;
    }
    let now = new Date().toUTCString(),
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
  remove: function (key) {
    if (sIsEmpty(key)) {
      return false;
    }
    let arr = [];
    if (Array.isArray(key)) {
      arr = key;
    } else {
      arr.push(key);
    }
    arr.forEach((k) => {
      window.localStorage.removeItem(k);
    });
    return this;
  },
  key: function (num) {
    if (typeof num !== 'number') {
      return false;
    }
    return window.localStorage.key(num);
  },
  clear: function () {
    window.localStorage.clear();
    return this;
  },
};
export default sLocalStorage;
