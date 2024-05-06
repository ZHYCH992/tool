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

// src/sIsEmpty/index.js
var sIsEmpty_exports = {};
__export(sIsEmpty_exports, {
  default: () => sIsEmpty_default
});
module.exports = __toCommonJS(sIsEmpty_exports);
var import_sType = __toESM(require("../sType/index.js"));
var sIsEmpty = (data) => {
  let type = (0, import_sType.default)(data);
  if (!data) {
    return true;
  } else if (type === "Function") {
    return data.toString().replace(/\s+/g, "").match(/{.*}/g)[0] == "{}";
  } else if (type === "Array") {
    return data.join("") == "";
  } else if (type === "Object") {
    return Object.keys(data).length === 0;
  } else {
    return false;
  }
};
var sIsEmpty_default = sIsEmpty;
