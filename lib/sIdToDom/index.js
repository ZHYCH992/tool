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

// src/sIdToDom/index.js
var sIdToDom_exports = {};
__export(sIdToDom_exports, {
  default: () => sIdToDom_default
});
module.exports = __toCommonJS(sIdToDom_exports);
var import_sStrType = __toESM(require("../sStrType/index"));
var import_sType = __toESM(require("../sType/index"));
var sIdToDom = (elem) => {
  let type = (0, import_sType.default)(elem);
  if (!elem) {
    console.warn("Node selector is empty!");
    return false;
  } else if (type === "String") {
    let trim = elem.trim();
    if ((0, import_sStrType.default)(trim)) {
      if ((0, import_sStrType.default)(trim) === "name" && !trim.includes("=")) {
        trim = trim.slice(0, 1) + "name=" + trim.slice(1);
      }
      return document.querySelector(trim);
    } else {
      console.warn("No node is found with this string!");
      return false;
    }
  } else if (type.includes("HTML")) {
    return elem;
  } else {
    return false;
  }
};
var sIdToDom_default = sIdToDom;
