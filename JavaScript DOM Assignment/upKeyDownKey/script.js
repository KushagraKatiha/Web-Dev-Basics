let box = document.querySelector("div");
let container = document.querySelector("body");

container.addEventListener("keydown", goUp);
container.addEventListener("keyup", goDown);

function goUp() {
  box.style.top = "0px";
}

function goDown() {
  box.style.position = "absolute";
  box.style.top = "390px";
  //   box.style.transition = "3s";
}
