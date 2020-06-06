
export class Canvas {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.resize();
    window.onresize = this.resize.bind(this);
  }
  resize() {
    const self = this;
    const h = window.innerWidth;
    const w = window.innerHeight;
    console.log(`height: ${h} width: ${w}`);
    if (self.canvas) {
      self.canvas.style.width = `${h}px`;
      setTimeout(function () {
        self.canvas.style.height = `${w}px;`
      }, 0);
    }
  }
}