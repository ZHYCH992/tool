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

// src/sMerge/index.js
var sMerge_exports = {};
__export(sMerge_exports, {
  default: () => sMerge_default
});
module.exports = __toCommonJS(sMerge_exports);
var import_sClone = __toESM(require("../sClone/index.js"));
var import_sType = __toESM(require("../sType/index.js"));
var sMerge = (target, source, option = { arrAppend: false, clone: false, attrAppend: true }) => {
  if (typeof target != "object" || typeof source != "object") {
    return source;
  }
  if (!source) {
    return target;
  }
  let obj = option.copy ? (0, import_sClone.default)(target) : target;
  for (let k in source) {
    if (source.hasOwnProperty(k) && obj.hasOwnProperty(k)) {
      if (!obj[k]) {
        obj[k] = source[k];
      } else {
        if ((0, import_sType.default)(source[k]) != "Array") {
          obj[k] = sMerge(obj[k], source[k], option);
        } else {
          if (option.arrAppend) {
            obj[k].push(...source[k]);
          } else {
            obj[k] = source[k];
          }
        }
      }
    } else if (source.hasOwnProperty(k) && !obj.hasOwnProperty(k) && option.attrAppend) {
      obj[k] = source[k];
    }
  }
  return obj;
};
var sMerge_default = sMerge;
