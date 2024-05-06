class sLoading {
  static animtion = 'flippers';
  static time = 1500;
  static element = document.body;
  static hidenTiming = null;
  static autoHidenTiming = null;
  static loadingDom = null;
  static _animtionType = ['flippers', 'pong'];

  static _show = () => {
    this.loadingDom.style.position =
      this.element === document.body ? 'fixed' : 'absolute';
    this.loadingDom.style.display = 'flex';
    this.loadingDom.classList.remove('hiden');
  };

  static _hiden = () => {
    this.element.children.zLoading.classList.add('hiden');
    this.hidenTiming && clearTimeout(this.hidenTiming);
    this.hidenTiming = setTimeout(() => {
      this.element.children.zLoading.style.display = 'none';
    }, 1000);
  };

  static _createLoadingElement = () => {
    const html = `<section id="zLoading"><div class="${this.animtion}"><div></div><div></div><div></div><div></div><div></div></div></section>`;
    !this.element.children.zLoading &&
      this.element.insertAdjacentHTML('beforeend', html);
    this.loadingDom = this.element.children.zLoading;
  };

  static _checkParams = ({
    animtion = this.animtion,
    time = this.time,
    element = this.element,
  }) => {
    if (!this._animtionType.includes(animtion)) {
      console.error('sLoading:animtion is error');
      return;
    }
    if (typeof element !== 'object') {
      console.error('sLoading:element is error');
      return;
    }
    if (typeof time !== 'number') {
      console.error('sLoading:time is error');
      return;
    }

    this.time = time;
    this.element = element;
    this.loadingDom = this.element.children.zLoading;

    if (animtion && this.animtion !== animtion) {
      this.animtion = animtion;
      this.loadingDom.children[0].className = animtion;
    }

  };
  static show = (obj) => {
    obj && this._checkParams(obj);
    this._createLoadingElement();
    this._show();
  };
  static hiden = (obj) => {
    obj && this._checkParams(obj);
    if (!this.element.children.zLoading) {
      console.error('sLoading:zLoading is not defined');
      return;
    }
    this._hiden();
  };
  static auto = (obj) => {
    obj && this._checkParams(obj);
    this._createLoadingElement();
    this._show();
    this.autoHidenTiming && clearTimeout(this.autoHidenTiming);
    this.autoHidenTiming = setTimeout(this._hiden, this.time);
  };
}

export default sLoading;
