var elBurger = document.querySelector(".header__burger-btn");
var  elMenu = document.querySelector(".header__menu");
// var elMenu = document.querySelector(".header__menu");


elBurger.addEventListener("click", function() {
    elMenu.classList.toggle("header__menu--open");
    
})