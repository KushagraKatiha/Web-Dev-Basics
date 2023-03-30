let regEx =
  /(https:\/\/)www.linkedin.com\/in\/[A-Za-z0-9.]{5,30}[A-Za-z0-9]$/gi;

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
