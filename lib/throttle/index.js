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

// src/throttle/index.js
var throttle_exports = {};
__export(throttle_exports, {
  default: () => throttle_default
});
module.exports = __toCommonJS(throttle_exports);
function throttle({ fn, wait = 100 }) {
  let isThrottled = false;
  return (...args) => {
    if (!isThrottled) {
      isThrottled = true;
      setTimeout(() => {
        fn.apply(this, args);
        isThrottled = false;
      }, wait);
    }
  };
}
var throttle_default = throttle;
