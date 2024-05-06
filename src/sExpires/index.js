/*!
 * 设置多久后过期时间，返回过期时间（国标时间），
 */
const sExpires = (type = 'd', expires = 365) => {
  let dateExp;
  if (axIsDate(expires)) {
    dateExp = new Date(expires).toUTCString();
  } else {
    let now = new Date();
    if (type == 'second' || type == 's') {
      now.setSeconds(now.getSeconds() + ~~expires);
      dateExp = now.toUTCString();
    } else if (type == 'minute' || type == 'm') {
      now.setMinutes(now.getMinutes() + ~~expires);
      dateExp = now.toUTCString();
    } else if (type == 'hour' || type == 'h') {
      now.setHours(now.getHours() + ~~expires);
      dateExp = now.toUTCString();
    } else {
      now.setDate(now.getDate() + ~~expires);
      dateExp = now.toUTCString();
    }
  }
  return dateExp;
};

export default sExpires;
