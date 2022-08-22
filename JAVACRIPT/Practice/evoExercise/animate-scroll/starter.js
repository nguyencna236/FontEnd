const img = document.getElementsByTagName('img')

window.onscroll = (e)=>{
    [...img].forEach((item)=>{
        if(window.pageYOffset>item.offsetTop-item.offsetHeight/2){
            item.classList.add('active')
        }
        else item.classList.remove('active')
    })
}