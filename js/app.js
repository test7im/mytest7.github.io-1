let btnBurger = document.querySelector(".btn-mobile__burger");
let btnClose = document.querySelector(".mobile__btn-close");
let mobileBlock = document.querySelector(".mobile__block");
let _mask = document.querySelector("._mask");
if (btnBurger) {
  btnBurger.addEventListener("click", function (e) {
    btnBurger.classList.add("_active-burger");
    _mask.classList.add("_show");
    mobileBlock.classList.add("_active-move");
  });
}
function removeClass() {
  btnBurger.classList.remove("_active-burger");
  _mask.classList.remove("_show");
  mobileBlock.classList.remove("_active-move");
}
if (btnClose) {
  btnClose.addEventListener("click", function (e) {
    removeClass();
  });
}
if (_mask) {
  _mask.addEventListener("click", function (e) {
    if (!mobileBlock.contains(e.target)) removeClass();
  });
}
let mobileMenuItems = document.querySelectorAll(".mobile__menu-item");
for (let mobileMenuItem of mobileMenuItems) {
  mobileMenuItem.addEventListener("click", function (e) {
    removeClass();
  });
}
let valueScores = document.querySelectorAll(".valueScore");
for (let valueScore of valueScores) valueScore.parentNode.style.height = valueScore.innerHTML + "px";
