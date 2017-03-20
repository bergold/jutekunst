export class PopartHeaderComponent {
  static attachTo(root) {
    return new PopartHeaderComponent(root);
  }

  static get cssClasses() {
    return {
      STATE: 'popartheader__state',
      STATE_ACTIVE: 'popartheader__state--active'
    };
  }

  static get strings() {
    return {
    };
  }

  static get numbers() {
    return {
      TIMER_INTERVAL: 500
    };
  }

  constructor(root) {
    this.root = root;

    this.init();
  }

  init() {
    this._states = [];
    this._current = 0;

    this.queryAllStates();
    this.startTimer();
  }

  destroy() {

  }

  queryAllStates() {
    this._states = this.root.querySelectorAll('.' + PopartHeaderComponent.cssClasses.STATE);
  }

  startTimer() {
    this._timer = window.setInterval(this.tick.bind(this), PopartHeaderComponent.numbers.TIMER_INTERVAL);
  }

  stopTimer() {
    window.clearInterval(this._timer);
  }

  tick() {
    var state;
    state = this._current % this._states.length;
    this._states[state].classList.remove(PopartHeaderComponent.cssClasses.STATE_ACTIVE);

    this._current = this._current + 1;
    state = this._current % this._states.length;
    this._states[state].classList.add(PopartHeaderComponent.cssClasses.STATE_ACTIVE);
  }

}
