/*!
 * 设置多久后过期时间，返回过期时间（国标时间），
 */
var sExpires = function sExpires() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'd';
  var expires = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 365;
  var dateExp;
  if (axIsDate(expires)) {
    dateExp = new Date(expires).toUTCString();
  } else {
    var now = new Date();
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