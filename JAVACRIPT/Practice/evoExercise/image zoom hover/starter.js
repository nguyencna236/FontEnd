window.addEventListener('load',loadWeb)
function loadWeb(){
    img = document.querySelector('.image');
    imgcover = document.querySelector('.image-cover');

    imgcover.addEventListener('mousemove',handleHover)
    function handleHover(e){
        x = e.pageX;
        y = e.pageY;
        console.log(x,y);
        img.style = "width:auto; height:auto; max-height:unset";

        img.style.left = `${-(x/2)}px`;
        img.style.top = `${-(y/2)}px`;

    };

    imgcover.addEventListener('mouseleave',()=> image.style = "" )
}