function swap(x, y) {
  let arr = [...arguments];
  this.x = y;
  this.y = x;
  let newArr = [this.x, this.y];
  return `x=${this.x}, y=${this.y}`;
}

console.log(swap(5, 10));
console.log(x);
