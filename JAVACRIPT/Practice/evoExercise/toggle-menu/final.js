const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("click", function () {
  menu.classList.toggle("is-show");
  menuToggle.classList.toggle("fa-bars");
  menuToggle.classList.toggle("fa-times");
});
document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
    // cái nhấn vào ko chứa menu và cái nhấn vào ko phải element có class menu-toggle
    menu.classList.remove("is-show");
    menuToggle.classList.remove("fa-times");
    menuToggle.classList.add("fa-bars");
  }
});
