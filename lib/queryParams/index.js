var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/queryParams/index.js
var queryParams_exports = {};
__export(queryParams_exports, {
  default: () => queryParams_default
});
module.exports = __toCommonJS(queryParams_exports);
var _queryParams = class {
  static get(key) {
    return this.userParams.get(key);
  }
  static set(key, value) {
    this.userParams.set(key, value);
    this.userUrl.search = this.userParams.toString();
    history.replaceState(null, "", this.userUrl.href);
  }
  static add(key, value) {
    this.userParams.append(key, value);
    this.userUrl.search = this.userParams.toString();
    history.replaceState(null, "", this.userUrl.href);
  }
  static remove(key) {
    this.userParams.delete(key);
    this.userUrl.search = this.userParams.toString();
    history.replaceState(null, "", this.userUrl.href);
  }
};
var queryParams = _queryParams;
__publicField(queryParams, "userUrl", new URL(window.location.href));
__publicField(queryParams, "userParams", new URLSearchParams(_queryParams.userUrl.search));
var queryParams_default = queryParams;
