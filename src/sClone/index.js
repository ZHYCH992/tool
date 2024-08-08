let clone;
if (structuredClone) {
  clone = structuredClone;
} else {
  clone = (data) => {
    let cloneObj = (obj) => {
      if (obj === null) {
        return null;
      } else if (typeof obj !== 'object') {
        return obj;
      } else if (obj.constructor === Date) {
        return new Date(obj);
      } else if (structuredClone) {
        return structuredClone(obj);
      } else {
        let newObj = {};
        for (let k in obj) {
          if (obj[k] === null) {
            newObj[k] = null;
          } else if (typeof obj[k] === 'object' && !obj[k].nodeType) {
            newObj[k] = clone(obj[k]);
            if (obj[k] instanceof Array) {
              let newArray = [];
              for (let i of obj[k]) {
                newArray.push(clone(i));
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
}

export default clone;
