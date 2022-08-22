const imgs = document.querySelectorAll('.content img')
const body = document.body;
imgs.forEach((item)=>item.addEventListener('click',handleOpen))
function handleOpen(e){
    image = e.target.getAttribute('src')
    const template = `
    <div class="lightbox">
        <div class="lightbox-content">
        <i class="fa fa-angle-left lightbox-prev"></i>
        <img
            src="${image}"
            alt=""
            class="lightbox-image"
         />
         <i class="fa fa-angle-right lightbox-next"></i>
     </div>
    </div>`;
    body.insertAdjacentHTML('beforeend',template)
}
body.addEventListener('click',handleMove);

function handleMove(e){
    lightImg = document.querySelector('.lightbox-image')
    if(!lightImg) return;
    else if(e.target.matches('.lightbox')) e.target.parentNode.removeChild(e.target);

    const src = lightImg.getAttribute('src')
    index = [...imgs].findIndex((item)=>item.getAttribute('src')==src)

    if (e.target.matches(".lightbox-next")) {
        index = index + 1;
        if (index > imgs.length - 1) index = 0;
        const newsrc = [...imgs][index].getAttribute('src');
        lightImg.setAttribute('src',newsrc);
    }

    if (e.target.matches(".lightbox-prev")) {
        index = index + 1;
        if (index < 0 ) index = [...imgs].length - 1;
        const newsrc = [...imgs][index].getAttribute('src');
        lightImg.setAttribute('src',newsrc);
    }
}