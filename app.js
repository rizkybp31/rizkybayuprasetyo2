const mainMenu = document.querySelector(".main-menu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.transisition = "1s ease"
  mainMenu.style.top = "0rem";
}

function close() {
  mainMenu.style.top = "-1000%";
}

