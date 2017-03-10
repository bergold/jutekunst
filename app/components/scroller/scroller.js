export class ScrollerComponent {
  static attachTo(root) {
    return new ScrollerComponent(root);
  }

  constructor(root) {
    this.root = root;

    this._onScroll = this._onScroll.bind(this);
    this.init();
  }

  init() {
    this.root.querySelector('.scrollcontainer').addEventListener('scroll', this._onScroll);
  }

  destroy() {

  }

  _onScroll(evt) {
    var sc = this.root.querySelector('.scrollcontainer');
    var pp = sc.scrollTop / sc.offsetHeight;
    this.root.querySelector('.header').ShrinkHeaderComponent.update(pp);
  }

}
