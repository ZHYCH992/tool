var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/sLocalStorage/index.js
var sLocalStorage_exports = {};
__export(sLocalStorage_exports, {
  default: () => sLocalStorage_default
});
module.exports = __toCommonJS(sLocalStorage_exports);
var import_sClone = __toESM(require("../sClone/index.js"));
var import_sExpires = __toESM(require("../sExpires/index.js"));
var import_sExtend = __toESM(require("../sExtend/index.js"));
var import_sIsEmpty = __toESM(require("../sIsEmpty/index.js"));
var import_sType = __toESM(require("../sType/index.js"));
var sLocalStorage = {
  set: function(key, value = "", options = { type: "d", expires: 0, cover: true }) {
    if (typeof key !== "string" && !key) {
      return false;
    }
    let newValue = (0, import_sClone.default)(value), type = (0, import_sType.default)(value), filterProps = (obj) => {
      Object.keys(obj).forEach((k) => {
        let val = obj[k];
        ((0, import_sType.default)(val) === "Array" || (0, import_sType.default)(val) === "Object") && filterProps(val);
        ((0, import_sType.default)(val).includes("HTML") || (0, import_sType.default)(val) === "Function") && delete obj[k];
      });
      return obj;
    };
    if ((type === "Array" || type === "Object") && !(0, import_sIsEmpty.default)(newValue)) {
      filterProps(newValue);
    }
    let expires = options.expires !== 0 ? (0, import_sExpires.default)(options.type, options.expires) : 0, oldValue = sLocalStorage.get(key), valueExp = {
      data: !options.cover && sLocalStorage.get(key) ? (0, import_sExtend.default)(oldValue, newValue) : newValue,
      expires
    };
    if ((options.expires < 0 || newValue === null) && this.get(key)) {
      this.del(key);
    } else {
      window.localStorage.setItem(key, JSON.stringify(valueExp));
    }
    return this;
  },
  get: function(key) {
    if ((0, import_sIsEmpty.default)(key)) {
      return false;
    }
    let now = (/* @__PURE__ */ new Date()).toUTCString(), valueExp = JSON.parse(window.localStorage.getItem(key));
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
  remove: function(key) {
    if ((0, import_sIsEmpty.default)(key)) {
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
  key: function(num) {
    if (typeof num !== "number") {
      return false;
    }
    return window.localStorage.key(num);
  },
  clear: function() {
    window.localStorage.clear();
    return this;
  }
};
var sLocalStorage_default = sLocalStorage;
/*!
 * 定义localStorage本地存储
 * 支持set、get、del、clear、key五个方法
 * set方法支持options参数，type和expires
 * 默认过期时间是0，即永不过期
 */
