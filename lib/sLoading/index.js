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

// src/sLoading/index.js
var sLoading_exports = {};
__export(sLoading_exports, {
  default: () => sLoading_default
});
module.exports = __toCommonJS(sLoading_exports);
var _sLoading = class {
};
var sLoading = _sLoading;
__publicField(sLoading, "animtion", "flippers");
__publicField(sLoading, "time", 1500);
__publicField(sLoading, "element", document.body);
__publicField(sLoading, "hidenTiming", null);
__publicField(sLoading, "autoHidenTiming", null);
__publicField(sLoading, "loadingDom", null);
__publicField(sLoading, "_animtionType", ["flippers", "pong"]);
__publicField(sLoading, "_show", () => {
  _sLoading.loadingDom.style.position = _sLoading.element === document.body ? "fixed" : "absolute";
  _sLoading.loadingDom.style.display = "flex";
  _sLoading.loadingDom.classList.remove("hiden");
});
__publicField(sLoading, "_hiden", () => {
  _sLoading.element.children.zLoading.classList.add("hiden");
  _sLoading.hidenTiming && clearTimeout(_sLoading.hidenTiming);
  _sLoading.hidenTiming = setTimeout(() => {
    _sLoading.element.children.zLoading.style.display = "none";
  }, 1e3);
});
__publicField(sLoading, "_createLoadingElement", () => {
  const html = `<section id="zLoading"><div class="${_sLoading.animtion}"><div></div><div></div><div></div><div></div><div></div></div></section>`;
  !_sLoading.element.children.zLoading && _sLoading.element.insertAdjacentHTML("beforeend", html);
  _sLoading.loadingDom = _sLoading.element.children.zLoading;
});
__publicField(sLoading, "_checkParams", ({
  animtion = _sLoading.animtion,
  time = _sLoading.time,
  element = _sLoading.element
}) => {
  if (!_sLoading._animtionType.includes(animtion)) {
    console.error("sLoading:animtion is error");
    return;
  }
  if (typeof element !== "object") {
    console.error("sLoading:element is error");
    return;
  }
  if (typeof time !== "number") {
    console.error("sLoading:time is error");
    return;
  }
  _sLoading.time = time;
  _sLoading.element = element;
  _sLoading.loadingDom = _sLoading.element.children.zLoading;
  if (animtion && _sLoading.animtion !== animtion) {
    _sLoading.animtion = animtion;
    _sLoading.loadingDom.children[0].className = animtion;
  }
});
__publicField(sLoading, "show", (obj) => {
  obj && _sLoading._checkParams(obj);
  _sLoading._createLoadingElement();
  _sLoading._show();
});
__publicField(sLoading, "hiden", (obj) => {
  obj && _sLoading._checkParams(obj);
  if (!_sLoading.element.children.zLoading) {
    console.error("sLoading:zLoading is not defined");
    return;
  }
  _sLoading._hiden();
});
__publicField(sLoading, "auto", (obj) => {
  obj && _sLoading._checkParams(obj);
  _sLoading._createLoadingElement();
  _sLoading._show();
  _sLoading.autoHidenTiming && clearTimeout(_sLoading.autoHidenTiming);
  _sLoading.autoHidenTiming = setTimeout(_sLoading._hiden, _sLoading.time);
});
var sLoading_default = sLoading;
