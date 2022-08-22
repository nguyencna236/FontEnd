const colors = [
    "#ffa400",
    "#00aefd",
    "#ff6bcb",
    "#07a787",
    "#2979ff",
    "#e74c3c",
    "#3D6EF7",
  ];
function random(){
    document.body.style.background = colors[Math.floor(Math.random()*colors.length)]
}
// var button = document.getElementsByClassName("change") ko duoc
const button = document.querySelector(".change");

var na = button.addEventListener("click",random)