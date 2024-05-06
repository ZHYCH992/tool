import sType from '../sType/index.js';
/**
 * 定义判断为空函数，可判断function(){}，0，''，[]，{}，undefined，null
 */
const sIsEmpty = (data) => {
  let type = sType(data);
  if (!data) {
    return true;
  } else if (type === 'Function') {
    return data.toString().replace(/\s+/g, '').match(/{.*}/g)[0] == '{}';
  } else if (type === 'Array') {
    return data.join('') == '';
  } else if (type === 'Object') {
    return Object.keys(data).length === 0;
  } else {
    return false;
  }
};

export default sIsEmpty;
