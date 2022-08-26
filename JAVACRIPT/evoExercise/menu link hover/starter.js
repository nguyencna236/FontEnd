// window.addEventListener('load',loadweb)
// function loadweb(){
//     const link = document.querySelectorAll('.menu-link')
//     link.forEach((item)=> item.addEventListener('mouseenter',handle))
    
//     line = document.createElement('div');
//     line.classList.add('line-effect')
//     document.body.appendChild(line)
//     function handle(e){
//         value = e.target.getBoundingClientRect();
//         const {top,left,height,width} = value;
//         console.log(top,left,height,width);
//         line.style.left = e.target.offsetLeft+'px';
//         line.style.width = `${width}px`
//         line.style.top = `${top+height+height/3}px`
//     }
// }