var select = document.querySelector('.dropdown__select');
var list = document.querySelector('.dropdown__list');
var icon = document.querySelector('.dropdown__caret')
var drop = document.querySelector('.dropdown')
var newText = document.querySelector('.dropdown__selected')
var textItem = document.querySelectorAll('.dropdown__item')

select.addEventListener('click',handleShow)
function handleShow(e){
    list.classList.toggle('show')
    icon.classList.toggle('fa-caret-up')
}
textItem .forEach((item)=>{
    item.addEventListener('click',(e)=>{
        var text = e.target.querySelector('.dropdown__text').textContent;
        newText.textContent = text;
        list.classList.toggle('show')
    })
})

document.addEventListener('click',handleRemove)
function handleRemove(e){
    if(!drop.contains(e.target)) list.classList.remove('show');
}