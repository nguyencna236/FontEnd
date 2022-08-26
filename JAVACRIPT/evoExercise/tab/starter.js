const list = document.querySelectorAll('.tab-item')
const content = document.querySelectorAll('.tab-content')

list.forEach((item)=>item.addEventListener('click',handleList))
function handleList(e){
    list.forEach((item)=>item.classList.remove('active'));
    content.forEach((item)=>item.classList.remove('active'));
    e.target.classList.add('active');
    index = [...list].findIndex((item)=>item==e.target);
    [...content][index].classList.add('active')
}


