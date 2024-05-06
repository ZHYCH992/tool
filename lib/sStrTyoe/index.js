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

// src/sStrTyoe/index.js
var sStrTyoe_exports = {};
__export(sStrTyoe_exports, {
  default: () => sStrTyoe_default
});
module.exports = __toCommonJS(sStrTyoe_exports);
var sStrType = (str) => {
  if (typeof str !== "string") {
    console.error("Argument must be a string!");
    return false;
  }
  str = str.trim();
  let isUpperCase = (letter) => {
    if (letter >= "A" && letter <= "Z") {
      return true;
    }
  }, type = "";
  if (str) {
    if (str.includes(" ")) {
      type = "level";
    } else {
      if (str.startsWith("#")) {
        type = "id";
      } else if (str.startsWith(".")) {
        type = "class";
      } else if (str.startsWith("[") && str.endsWith("]")) {
        type = "name";
      } else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(str) || [...str].every((i) => isUpperCase(i))) {
        type = "node";
      }
    }
  }
  return type;
};
var sStrTyoe_default = sStrType;
