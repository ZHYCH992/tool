/**
 * 判断选择器类型
 */
const sStrType = (str) => {
  if (typeof str !== 'string') {
    console.error('Argument must be a string!');
    return false;
  }
  str = str.trim();
  let isUpperCase = (letter) => {
      if (letter >= 'A' && letter <= 'Z') {
        return true;
      }
    },
    type = '';
  if (str) {
    if (str.includes(' ')) {
      type = 'level';
    } else {
      if (str.startsWith('#')) {
        type = 'id';
      } else if (str.startsWith('.')) {
        type = 'class';
      } else if (str.startsWith('[') && str.endsWith(']')) {
        type = 'name';
      } else if (
        ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(str) ||
        [...str].every((i) => isUpperCase(i))
      ) {
        type = 'node';
      }
    }
  }
  return type;
};

export default sStrType;
