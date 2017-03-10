export class ShrinkHeaderComponent {
  static attachTo(root) {
    return new ShrinkHeaderComponent(root);
  }

  constructor(root) {
    this.root = root;
  }

  init() {

  }

  destroy() {

  }

  update(size) {
    size = 1 - size;
    console.log("ShrinkHeader:update", size);

    var title = this.root.querySelector('.title');
    title.style.width = ((this.root.offsetWidth - 100) * size + 100) + "px";
    title.style.height = (this.root.offsetHeight * size) + "px";
    title.style.fontSize = (128 - 22) * size + 22 + "px";
  }

}
