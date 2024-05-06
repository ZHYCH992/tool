class sCookie {
  static set(name, value, options = { type: 'd', expires: 365 }) {
    if (!name) {
      console.error('The name of cookie can not be empty!');
      return false;
    }
    let now = new Date(),
      opt = Object.assign({}, options),
      string = opt.path ? ';path=' + opt.path : '';
    string += opt.domain ? ';domain=' + opt.domain : '';
    string += opt.secure ? ';secure=' + opt.secure : '';
    string += opt.sameSite ? ';sameSite=' + opt.sameSite : '';
    if (opt.type === 'second' || opt.type === 's') {
      now.setSeconds(now.getSeconds() + ~~opt.expires);
      opt.expires = now.toUTCString();
    } else if (opt.type === 'minute' || opt.type === 'm') {
      now.setMinutes(now.getMinutes() + ~~opt.expires);
      opt.expires = now.toUTCString();
    } else if (opt.type === 'hour' || opt.type === 'h') {
      now.setHours(now.getHours() + ~~opt.expires);
      opt.expires = now.toUTCString();
    } else {
      now.setDate(now.getDate() + ~~opt.expires);
      opt.expires = now.toUTCString();
    }
    document.cookie =
      name +
      '=' +
      encodeURIComponent(value) +
      ';expires=' +
      opt.expires +
      string;
  }
  static get(name) {
    let cookieArr = document.cookie.replace(/;\s*/, ';').split(';');
    let value = '';
    for (let i = 0; i < cookieArr.length; i++) {
      let k = cookieArr[i].split('=')[0],
        v = cookieArr[i].split('=')[1];
      if (k === name) {
        value = v;
        break;
      }
    }
    if (value) {
      return decodeURIComponent(value);
    } else {
      return false;
    }
  }
  static remove(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
}

export default sCookie;
