class queryParams {
  static userUrl = new URL(window.location.href);
  static userParams = new URLSearchParams(this.userUrl.search);
  static get(key) {
    return this.userParams.get(key);
  }
  static set(key, value) {
    this.userParams.set(key, value);
    this.userUrl.search = this.userParams.toString();
    history.replaceState(null, '', this.userUrl.href);
  }
  static add(key, value) {
    this.userParams.append(key, value);
    this.userUrl.search = this.userParams.toString();
    history.replaceState(null, '', this.userUrl.href);
  }
  static remove(key) {
    this.userParams.delete(key);
    this.userUrl.search = this.userParams.toString();
    history.replaceState(null, '', this.userUrl.href);
  }
}

export default queryParams;
