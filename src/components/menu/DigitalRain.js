import gsap from "gsap";

const DEFAULT_OPTIONS = {
  size: 20 * window.devicePixelRatio,
  family: "JetBrains Mono, monospace",
  fps: 24,
  hue: 120,
  limiter: 0.5,
  glyphs:
    "ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ",
};

class DigitalRain {
  constructor(el, options) {
    if (el.tagName !== "CANVAS") return console.error("Need a canvas element");
    this.canvas = el;
    this.options = options;
    this.size = options.size;
    this.glyphs = this.options.glyphs.split("");
    this.context = el.getContext("2d");
    this.setSize();
    this.setTracker();
    this.init();
  }

  setColumn(column = {}) {
    const len = gsap.utils.random(6, this.rows, 1);
    const destination = gsap.utils.random(this.rows * 0.1, this.rows + len, 1);
    let chars = column.chars || [];
    let cacheChars = [...chars];

    chars = new Array(Math.max(destination, chars.length))
      .fill()
      .map((_, index) => {
        return index <= destination
          ? this.glyphs[gsap.utils.random(0, this.glyphs.length - 1, 1)]
          : cacheChars[index];
      });

    const row = gsap.utils.random(-this.rows, -1, 1);
    return { ...column, chars, cacheChars, destination, row, len };
  }

  setTracker() {
    this.tracker = new Array(this.columns).fill().map(() => this.setColumn());
  }

  reset() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.setSize();
    this.setTracker();
    this.renderMatrix();
  }

  init() {
    this.renderMatrix = () => this.render();
    this.resetOnSize = () => this.reset();
    window.addEventListener("resize", this.resetOnSize);
    this.renderMatrix();
    gsap.ticker.fps(this.options.fps);
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let c = 0; c < this.characters; c++) {
      const x = c % this.columns;
      const y = Math.floor(c / this.columns);
      const column = this.tracker[x];
      if (y === 0 && Math.random() > 0.1) column.row += 1;
      const row = column.row;
      const chars = column[y > row ? "cacheChars" : "chars"];
      if (chars[y])
        this.context.fillText(chars[y], x * this.fontSize, y * this.fontSize);
    }
  }

  setSize() {
    const { height, width } = this.canvas.getBoundingClientRect();
    this.canvas.height = height * 1 * (window.devicePixelRatio || 1);
    this.canvas.width = width * 1 * (window.devicePixelRatio || 1);
    this.fontSize = Math.ceil(this.size);
    this.columns = Math.ceil(this.canvas.width / this.fontSize);
    this.rows = Math.ceil(this.canvas.height / this.fontSize) + 1;
    this.characters = this.rows * this.columns;
    this.context.font = `${this.fontSize}px ${this.options.family}`;
  }
}

export { DigitalRain, DEFAULT_OPTIONS };
