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

// src/websiteContext/index.js
var websiteContext_exports = {};
__export(websiteContext_exports, {
  default: () => websiteContext_default
});
module.exports = __toCommonJS(websiteContext_exports);
function websiteContext() {
  const imgList = document.querySelectorAll("body img");
  let siteId, columnId, path;
  const reg = (txt) => {
    if (!txt || typeof txt !== "string" || txt.indexOf("siteId") < 0) {
      console.error("websiteContext: siteId, columnId 获取失败！");
      return void 0;
    }
    const params = new URLSearchParams(txt);
    siteId = params.get("siteId");
    columnId = params.get("columnId");
  };
  if (imgList.length > 1) {
    for (let i = imgList.length - 1; i > 0; i--) {
      console.log(1);
      const img = imgList[i];
      const src = img.src;
      if (src.indexOf("siteId") > -1) {
        reg(src.split("?")[1]);
        break;
      }
    }
  } else {
    reg(imgList[0].src.split("?")[1]);
  }
  return { siteId, columnId, path };
}
var websiteContext_default = websiteContext;
