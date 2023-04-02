let arr = [5, 2, 7, 1, 9];

function maxMin(arr) {
  let obj = { max: Math.max(...arr), min: Math.min(...arr) };

  return obj;
}

console.log(maxMin(arr));
