//for button-menu
menuBtn.onclick = function showMenu() { //добавляет и убирает видимость меню
  menu.classList.toggle("show");
}

//for menu
window.addEventListener("resize", function hideMenu() { //убираем меню при увеличении экрана
  if (window.innerWidth >= 650) {
    menu.classList.remove("show");
  }
});


