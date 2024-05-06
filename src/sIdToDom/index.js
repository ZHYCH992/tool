import sStrType from '../sStrType/index';
import sType from '../sType/index';
/**
 * 将#id转成DOM，插件中常用
 */
const sIdToDom = (elem) => {
  let type = sType(elem);
  if (!elem) {
    console.warn('Node selector is empty!');
    return false;
  } else if (type === 'String') {
    let trim = elem.trim();
    if (sStrType(trim)) {
      if (sStrType(trim) === 'name' && !trim.includes('=')) {
        trim = trim.slice(0, 1) + 'name=' + trim.slice(1);
      }
      return document.querySelector(trim);
    } else {
      console.warn('No node is found with this string!');
      return false;
    }
  } else if (type.includes('HTML')) {
    return elem;
  } else {
    return false;
  }
};
export default sIdToDom;
