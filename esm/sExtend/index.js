import sMerge from "../sMerge/index";
/**
 * 定义对象扩展
 * user属性可覆盖dft属性，并自动合并为新的dft
 * DOM的data-*属性级别最高，使用短横“-”区分属性层级，最多允许使用三个短横
 * 举例说明： <button data-name="" data-school="" data-teachers-mathematics-name=""></button>
 */
var sExtend = function sExtend(dft, user, element, attr) {
  if (!dft) {
    console.error(axError.notExist);
    return false;
  }
  var elem = element ? axIdToDom(element) : null;
  sMerge(dft, user);
  elem ? sMerge(dft, axAttrToJson(elem, attr)) : null;
  return dft;
};
export default sExtend;