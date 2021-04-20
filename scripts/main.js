const toggleMenu = document.querySelector("#toggleMenu");
const toggleClose = document.querySelector("#close");

toggleMenu.addEventListener("click", (evt) => {
  if (evt.target.checked) {
    document.body.style.overflow = "hidden";
  }
});

toggleClose.addEventListener("click", (evt) => {
  if (evt.target.checked) {
    document.body.style.overflow = "scroll";
  }
});
