class ShrinkHeader {
  static attachTo(root) {
    return new ShrinkHeader(root);
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

class Scroller {
  static attachTo(root) {
    return new Scroller(root);
  }
  
  constructor(root) {
    this.root = root;
    
    this._onScroll = this._onScroll.bind(this);
  }
  
  init() {
    this.root.querySelector('.scrollcontainer').addEventListener('scroll', this._onScroll);
    
    var h = this.root.querySelector('.header');
    h.ShrinkHeader = ShrinkHeader.attachTo(h);
  }
  
  destroy() {
  
  }
  
  _onScroll(evt) {
    var sc = this.root.querySelector('.scrollcontainer');
    var pp = sc.scrollTop / sc.offsetHeight;
    this.root.querySelector('.header').ShrinkHeader.update(pp);
  }
  
}

(function() {

  var scroller = document.getElementById('Scroller');
  
  scroller.Scroller = Scroller.attachTo(scroller);
  scroller.Scroller.init();

})();
