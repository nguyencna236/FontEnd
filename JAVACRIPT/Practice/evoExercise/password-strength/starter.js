const input = document.querySelector('.input')
const eight = document.querySelector('.check-length');
const upp = document.querySelector('.check-upper');
const num = document.querySelector('.check-number');
const special = document.querySelector('.check-special');
const check = document.querySelectorAll('.check-item')

input.addEventListener('input',handle)
function handle(e){
    value = this.value;
    console.log(value)

    if(!value.length>0){
        check.forEach((item)=>{
            item.classList.remove('active');
            item.classList.remove('unactive');
        })
        return;
    }
    if(value.length>8){
        eight.classList.add('active');
        eight.classList.remove('unactive')
    } 
    else{
        eight.classList.remove('active');
        eight.classList.add('unactive')
    } 

    checkclass(/[A-Z]/,value,upp)
    checkclass(/[0-9]/,value,num)
    checkclass(/[!~#$%^&*()-+=;'><?`]/,value,special)
    checkclass(/[A-Z]/,value,upp)                       

}
function checkclass(regex,value,classList){
    if(regex.test(value)){
        classList.classList.add('active');
        classList.classList.remove('unactive')
    } 
    else{
        classList.classList.remove('active');
        classList.classList.add('unactive')
    } 
}