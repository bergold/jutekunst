const registry = Object.create(null);

const CONSOLE_WARN = console.warn.bind(console);

export function init(root = document, warn = CONSOLE_WARN) {
  const nodes = root.querySelectorAll('[data-js-init]');
  for (let i = 0, node; (node = nodes[i]); i++) {
    const ctorName = node.dataset.jsInit;
    if (!ctorName) {
      throw new Error('(dom-init) Constructor name must be given.');
    }

    const Ctor = registry[ctorName];
    if (typeof Ctor !== 'function') {
      throw new Error(
        `(dom-init) Could not find constructor in registry for ${ctorName}`);
    }

    if (node[ctorName]) {
      warn(`(dom-init) Component already initialized for ${node}. Skipping...`);
      continue;
    }

    const component = Ctor.attachTo(node);
    Object.defineProperty(node, ctorName, {
      value: component,
      writable: false,
      enumerable: false,
      configurable: true,
    });
  }
}

export function register(componentName, Ctor, warn = CONSOLE_WARN) {
  if (typeof Ctor !== 'function') {
    throw new Error(`(dom-init) Invalid Ctor value ${Ctor}. Expected function`);
  }
  if (registry[componentName]) {
    warn(
      `(dom-init) Overriding registration for ${componentName} with ${Ctor}. ` +
      `Was: ${registry[componentName]}`);
  }
  registry[componentName] = Ctor;
};

export function deregister(componentName) {
  delete registry[componentName];
};

export function deregisterAll() {
  Object.keys(registry).forEach(this.deregister, this);
};
