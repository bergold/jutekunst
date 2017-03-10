class Component {

  static attachTo(root) {
    return new Component(root);
  }

  static get cssClasses() {
    return {
    };
  }

  static get strings() {
    return {
    };
  }

  static get numbers() {
    return {
    };
  }

  constructor(root) {
    super(root);
    this.init();
  }

  init() {}

  destroy() {}

}
