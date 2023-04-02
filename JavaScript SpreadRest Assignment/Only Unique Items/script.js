let arr = [
  1, 2, 3, 4, 5, 2, 1, 32, 2, 412, 432, 423, 3, 11, 32, 3, 4, 2, 1, 412,
];

let nonDuplicates = (arr) => {
  let newSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    newSet.add(arr[i]);
  }
  return newSet;
};

console.log(nonDuplicates(arr));
