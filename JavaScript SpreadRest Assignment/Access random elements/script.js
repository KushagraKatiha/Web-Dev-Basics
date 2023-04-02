let arr = [1, 2, 3, 4, 5];

function access(arr) {
  let first = arr[0];
  let second = arr[1];
  let last = arr[arr.length - 1];

  let finalArr = [first, second, last];

  return finalArr;
}

console.log(access(arr));
