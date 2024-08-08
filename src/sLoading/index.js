class sLoading {
  static animation = 'flippers';
  static time = 1500;
  static element = document.body;
  static hidenTiming = null;
  static autoHidenTiming = null;
  static loadingDom = null;
  static _animationType = [
    [
      'arc',
      'basic',
      'bounce',
      'chase',
      'color-range',
      'color-wheel',
      'different-directions',
      'dots',
      'dots-fade',
      'dots-flow',
      'double-ringed',
      'double-up',
      'duo',
      'eclipse',
      'eight',
      'fidget',
      'flickering-pentagon',
      'flip-square',
      'fly-by',
      'four-dots',
      'gyro',
      'half-ring',
      'line',
      'line-of-dots',
      'mexican-wave',
      'orbit',
      'outline-square',
      'palette',
      'pendulum',
      'pill',
      'radial',
      'rays',
      'ring-of-dots',
      'ringed',
      'rings',
      'rotary',
      'scale-dots',
      'scale-dots-offset',
      'scan',
      'siblings',
      'side-to-side',
      'sliding-tiles',
      'snake',
      'spinning-coin',
      'spinning-coin-fall',
      'spinning-dots',
      'spinning-dots-scaled',
      'split',
      'square-of-dots',
      'stop-and-go',
      'swap',
      'throw',
      'traditional',
      'trigger',
      'tumble',
      'whirl',
      'wind-up',
      'bar-spin',
      'battery',
      'bloom',
      'borders',
      'box-spin',
      'breakout',
      'color-arc',
      'color-bridge',
      'cyclical',
      'flip-square-travel',
      'hourglass',
      'load-man',
      'merge',
      'rainbow',
      'sliding-tiles-bordered',
      'zonal',
      'blades',
      'book',
      'building-blocks',
      'cascade',
      'circle-path',
      'coffee',
      'combine',
      'combine-two',
      'cube',
      'dominoes',
      'equalizer',
      'feeder',
      'flip-to-square',
      'flip-to-square-random',
      'flippers',
      'flippers-alternate',
      'follow-the-leader',
      'follow-the-leader-line',
      'grow-fade-dots',
      'honeycomb',
      'in-and-out',
      'infinity-path',
      'meetup',
      'orbit-star',
      'pan-out-circle',
      'pong',
      'push-out',
      'push-pop',
      'reach',
      'ring-of-stars',
      'rotating-dots',
      'scaling-circle',
      'scaling-dots',
      'slide-in',
      'waterfall',
    ],
  ];

  static _show = () => {
    this.loadingDom.style.position =
      this.element === document.body ? 'fixed' : 'absolute';
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
    const html = `<section id="zLoading"><div class="${this.animation}"><div></div><div></div><div></div><div></div><div></div></div></section>`;
    this.element.style.position = 'relative';
    this.element.insertAdjacentHTML('beforeend', html);
    this.loadingDom = this.element.children.zLoading;
    this.loadingDom.style.display = 'flex';
  };

  static _checkParams = ({
    animation = this.animation,
    time = this.time,
    element = this.element,
  }) => {
    this.time = time;
    this.element = element;
    if (!this.element.children.zLoading) {
      this._createLoadingElement();
    }
    if (animation && this.animation !== animation) {
      this.animation = animation;
      this.loadingDom.children[0].className = animation;
    }
  };
  static show = (obj) => {
    obj && this._checkParams(obj);
    this._show();
  };
  static hiden = (obj) => {
    obj && this._checkParams(obj);
    this._hiden();
  };
  static auto = (obj) => {
    obj && this._checkParams(obj);
    this._show();
    this.autoHidenTiming && clearTimeout(this.autoHidenTiming);
    this.autoHidenTiming = setTimeout(this._hiden, this.time);
  };
}

export default sLoading;
