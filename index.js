const inputEL = document.querySelector(".input");
const bodyEL = document.querySelector("body");

inputEL.checked = JSON.parse(localStorage.getItem("mode"));
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
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEL.checked));
}
