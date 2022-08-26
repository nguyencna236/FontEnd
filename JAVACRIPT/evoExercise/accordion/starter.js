const head = document.querySelectorAll('.accordion-header')
const content = document.querySelectorAll('.accordion-content')
const icon = document.querySelectorAll('.icon')

head.forEach((item)=>item.addEventListener('click',handle))
function handle(e){
    e.target.nextElementSibling.classList.toggle('is-active');
    index = [...head].findIndex((item)=>item==e.target);
    console.log(index);
    [...icon][index].classList.toggle('fa-angle-up');
    [...icon][index].classList.toggle('fa-angle-down')
}