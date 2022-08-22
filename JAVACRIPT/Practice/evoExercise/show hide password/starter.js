const input = document.getElementsByTagName('input')
const icon = document.querySelector('.toggle')

icon.addEventListener('click',handle)
function handle(e){
    console.log([...input][0]);
    // [...input][0].setAttribute("type",'text')

    type = icon.previousElementSibling.getAttribute("type");

    if(type == 'password') icon.previousElementSibling.setAttribute("type",'text');
    else icon.previousElementSibling.setAttribute("type",'password'); 
}