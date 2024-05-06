var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/sExpires/index.js
var sExpires_exports = {};
__export(sExpires_exports, {
  default: () => sExpires_default
});
module.exports = __toCommonJS(sExpires_exports);
var sExpires = (type = "d", expires = 365) => {
  let dateExp;
  if (axIsDate(expires)) {
    dateExp = new Date(expires).toUTCString();
  } else {
    let now = /* @__PURE__ */ new Date();
    if (type == "second" || type == "s") {
      now.setSeconds(now.getSeconds() + ~~expires);
      dateExp = now.toUTCString();
    } else if (type == "minute" || type == "m") {
      now.setMinutes(now.getMinutes() + ~~expires);
      dateExp = now.toUTCString();
    } else if (type == "hour" || type == "h") {
      now.setHours(now.getHours() + ~~expires);
      dateExp = now.toUTCString();
    } else {
      now.setDate(now.getDate() + ~~expires);
      dateExp = now.toUTCString();
    }
  }
  return dateExp;
};
var sExpires_default = sExpires;
/*!
 * 设置多久后过期时间，返回过期时间（国标时间），
 */
