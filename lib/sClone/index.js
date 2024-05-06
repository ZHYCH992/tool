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

// src/sClone/index.js
var sClone_exports = {};
__export(sClone_exports, {
  default: () => sClone_default
});
module.exports = __toCommonJS(sClone_exports);
var sClone = (data) => {
  let cloneObj = (obj) => {
    if (obj === null) {
      return null;
    } else if (typeof obj !== "object") {
      return obj;
    } else if (obj.constructor === Date) {
      return new Date(obj);
    } else if (structuredClone) {
      return structuredClone(obj);
    } else {
      let newObj = {};
      for (let k in obj) {
        if (obj[k] == null) {
          newObj[k] = null;
        } else if (typeof obj[k] == "object" && !obj[k].nodeType) {
          newObj[k] = sClone(obj[k]);
          if (obj[k] instanceof Array) {
            let newArray = [];
            for (let i of obj[k]) {
              newArray.push(sClone(i));
            }
            newObj[k] = newArray;
          }
        } else {
          newObj[k] = obj[k];
        }
      }
      return newObj;
    }
  };
  if (Array.isArray(data)) {
    return data.map((k) => cloneObj(k));
  } else {
    return cloneObj(data);
  }
};
var sClone_default = sClone;
