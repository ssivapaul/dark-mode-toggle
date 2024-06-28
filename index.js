const inputEL = document.querySelector(".input");
const bodyEL = document.querySelector("body");

inputEL.checked = false;
updateBody();

function updateBody() {
  if (inputEL.checked) {
    bodyEL.style.background = "black";
  } else {
    bodyEL.style.background = "white";
  }
}

inputEL.addEventListener("click", () => {
  updateBody();
});
