const img = document.querySelectorAll('.slider-item');
const dotItem = document.querySelectorAll('.slider-dot-item');
const contentImg = document.querySelector('.slider-main');
var index = 0;

function activeDot(){
    contentImg.style = `transform: translateX(${-index*1000}px)`
    dotItem.forEach((item)=>{item.classList.remove('active')});
    [...dotItem][index].classList.add('active')
}
dotItem.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        index = [...dotItem].findIndex((item)=>item==e.target);
        activeDot()
    })
})
document.body.addEventListener('click',handle);

function handle(e){
    if(e.target.matches('.slider-next')){
        index++;
        if(index>=img.length){
            index = img.length - 1;
            return;
        } 
        activeDot()
    }
    if(e.target.matches('.slider-prev')){
        index--;
        if(index<0){
            index = 0;
            return;
        }
        activeDot()
    }
}
