let input = "hello everyone this is me !";
let output = "";

function strRev(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  console.log(output);
}
setTimeout(strRev, 2000, input);
