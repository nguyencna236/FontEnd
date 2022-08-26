const menu = document.querySelector('.menu')
const header = document.querySelector('.header')

header.onclick = ()=>{ menu.classList.toggle('is-show')};

document.onclick = ((e)=>{
  if(!menu.contains(e.target)&&!e.target.matches('.menu-toggle')) 
      menu.classList.remove('is-show');
})