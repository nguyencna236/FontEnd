const input =document.querySelector('input')
input.addEventListener('input',handle)
function handle(e){
    value = this.value;
    email =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(email.test(value.trim())){
        this.classList.add('valid')
        this.classList.remove('invalid')
    }
    else{
        this.classList.remove('valid')
        this.classList.add('invalid')
    }
    if(!value) this.classList.remove('invalid')
}