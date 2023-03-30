let delay = 4;
setInterval(function () {
  delay--;
  document.querySelector("p").innerText =
    "Remaining Time Until Next Random is: " + delay;
  if (delay == 0) {
    document.querySelector("span").innerText = Math.floor(
      Math.random() * (100 - 1) + 1
    );
    delay = 4;
  }
}, 1000);
