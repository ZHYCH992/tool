import sClone from '../sClone/index.js';
import sType from '../sType/index.js';
/**
 * 定义合并属性递归函数
 */
const sMerge = (
  target,
  source,
  option = { arrAppend: false, clone: false, attrAppend: true },
) => {
  if (typeof target != 'object' || typeof source != 'object') {
    return source;
  }
  if (!source) {
    return target;
  }
  let obj = option.copy ? sClone(target) : target;
  for (let k in source) {
    if (source.hasOwnProperty(k) && obj.hasOwnProperty(k)) {
      if (!obj[k]) {
        obj[k] = source[k];
      } else {
        if (sType(source[k]) != 'Array') {
          obj[k] = sMerge(obj[k], source[k], option);
        } else {
          if (option.arrAppend) {
            obj[k].push(...source[k]);
          } else {
            obj[k] = source[k];
          }
        }
      }
    } else if (
      source.hasOwnProperty(k) &&
      !obj.hasOwnProperty(k) &&
      option.attrAppend
    ) {
      obj[k] = source[k];
    }
  }
  return obj;
};

export default sMerge;
