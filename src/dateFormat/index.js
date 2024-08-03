//数字转中文
const numtoCNWeek = (num) => {
  const cnNums = new Array('一', '二', '三', '四', '五', '六', '日');
  return cnNums[num - 1];
};
const dateFormat = ({ date = new Date(), format = 'yyyy-MM-dd' }) => {
  const time = typeof date === 'string' ? new Date(date) : date;
  if (typeof format !== 'string') {
    console.error('dateFormat: format must be string');
    return;
  }

  try {
    const timeList = {
      M: time.getMonth() + 1,
      d: time.getDate(),
      h: time.getHours(),
      m: time.getMinutes(),
      s: time.getSeconds(),
      S: time.getMilliseconds(), //毫秒
      w: time.getDay(),
      W: numtoCNWeek(time.getDay()),
      q: Math.floor((time.getMonth() + 3) / 3), //季度
      Q: numtoCNWeek(Math.floor((time.getMonth() + 3) / 3)),
    };
    //格式匹配
    repFormat = format.replace(/([yMdhmsqQSwW])+/g, function (list, i) {
      let v = timeList[i];
      if (v !== undefined) {
        if (list.length > 1) {
          v = '0' + v;
          v = v.substr(v.length - 2);
        }
        return v;
      } else if (i === 'y') {
        return (time.getFullYear() + '').substr(4 - list.length);
      }
      return list;
    });
    return repFormat;
  } catch (e) {
    console.error('dateFormat:时间转换失败', e);
    return date;
  }
};

export default dateFormat;
