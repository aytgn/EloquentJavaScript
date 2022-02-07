class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  minus(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }
  get length() {
    return this._calculateLength();
  }

  _calculateLength() {
    const powTotal = Math.pow(this.x, 2) + Math.pow(this.y, 2);
    return Math.sqrt(powTotal);
  }
}

const vec1 = new Vec(1, 1);
const vec2 = new Vec(2, 3);

vec1.plus(vec2);

console.log(vec1.length);
