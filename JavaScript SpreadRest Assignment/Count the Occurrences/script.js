let input =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium dictum urna vitae bibendum. Maecenas viverra arcu non massa lobortis mattis. Donec finibus fermentum consectetur. Vestibulum turpis est, faucibus sit amet consequat et, pretium eu elit. Praesent nec turpis feugiat, porttitor tortor nec, commodo justo. Duis et dolor vitae tellus dolor dolor dolor dolor";

let wordCount = 0;
let letterCount = 1;

let countWord = (str) => {
  let arr = str.split(" ");
  let myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 0) {
      myMap.set(arr[i], (myMap.get(arr[i]) || wordCount) + letterCount);
    }
  }
  return myMap;
};

console.log(countWord(input));
