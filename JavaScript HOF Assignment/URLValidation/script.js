let regEx = /(?:https:\/\/|http:\/\/])[0-9A-Za-z]+.[A-Za-z]/gi;

document.querySelector("button").addEventListener("click", () => {
  if (
    document.querySelector("input").value.match(regEx) &&
    document.querySelector("button").innerText == "Validate"
  ) {
    document.querySelector("p").innerText = "URL Sucessfully Validated";
    document.querySelector("button").innerText = "Reset";
  } else if (document.querySelector("button").innerText == "Reset") {
    document.querySelector("p").innerText = "";
    document.querySelector("input").value = "";
    document.querySelector("button").innerText = "Validate";
  } else {
    document.querySelector("p").innerText = "URL Did not Validated";
    document.querySelector("button").innerText = "Reset";
  }
});
