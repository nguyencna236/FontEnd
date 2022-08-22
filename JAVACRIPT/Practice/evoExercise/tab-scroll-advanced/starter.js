const tab = document.querySelector('.tab')
const list = document.querySelector('.tab-list')
const item = document.querySelectorAll('.tab-item')
const next = document.querySelector('.tab-next');
const prev = document.querySelector('.tab-prev')
var value = 50;
const listWidthMax = list.scrollWidth - list.clientWidth;
console.log(listWidthMax)

item.forEach((item)=>item.addEventListener('click',handleclick))
function handleclick(e){
    item.forEach((item)=>item.classList.remove('active'))
    this.classList.add('active');
    itemLeft = this.offsetLeft;
    list.scroll(itemLeft/2,0)

}
list.addEventListener('wheel',handlewheel);

function handlewheel(e){
    this.scrollLeft += e.deltaY;
    console.log(this.scrollLeft)
    if(this.scrollLeft==100) prev.classList.remove('disabled');
    if(this.scrollLeft==356||this.scrollLeft==256) next.classList.remove('disabled');
    if(list.scrollLeft>=listWidthMax ) next.classList.add('disabled');
    if(list.scrollLeft<=0) prev.classList.add('disabled');      
}

document.body.addEventListener('click',handleIcon)
function handleIcon(e){
    if(e.target.matches('.tab-next')){
        list.scrollLeft += value;
        prev.classList.remove('disabled');
        if(list.scrollLeft>=listWidthMax) next.classList.add('disabled');  
    }
    else if(e.target.matches('.tab-prev')){
        list.scrollLeft -= value;
        next.classList.remove('disabled');
        if(list.scrollLeft<=0) prev.classList.add('disabled');   
    }
}