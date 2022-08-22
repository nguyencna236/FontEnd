
const arr = [
    { name: "fire",    img: "img/fire.png",    },
    { name: "youtube", img: "img/youtube.png", },
    // { name: "flash",   img: "img/flash.png",   },
    // { name: "gift",    img: "img/gift.png",    },
    // { name: "tron",    img: "img/tron.png",    },
    // { name: "ufo",     img: "img/ufo.png",     },
    // { name: "plant",   img: "img/plant.png",   },
    // { name: "burger",  img: "img/burger.png",  },
  ];
const grid = document.querySelector('.grid');
let count = 0;
let rep = 0;
let firstImg = "";
let lastImg = "";
let delay = 500;

array = arr.concat(arr).sort(()=>0.5-Math.random())
array.forEach((item)=>{
    card = document.createElement('div');
    front = document.createElement('div');
    back = document.createElement('div');
    card.classList.add('card');
    front.classList.add('front')
    back.classList.add('back')
    card.dataset.name = item.name;
    back.style.backgroundImage = `url(${item.img})`;
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

})

function hideSelect(){
    select = document.querySelectorAll('.selected');
    select.forEach((item)=>item.classList.add('matched'))
}
function reset(){
    count = 0;
    firstImg = "";
    lastImg = "";
    rep = null;
    select = document.querySelectorAll('.selected');
    select.forEach((item)=>item.classList.remove('selected'))

    // reset khi xong game
    matched = document.querySelectorAll('.matched')
    if(matched.length == array.length){
        setInterval(()=>{
            matched.forEach((item)=>item.classList.remove('matched'))
        },1000)
    }
}

grid.addEventListener('click',handleSelect)
function handleSelect(e){
    click = e.target;
    if( rep == click || 
        click.nodeName == 'SECTION' ||
        click.parentNode.classList.contains('matched') ||
        click.parentNode.classList.contains('selected') )
        return;
    if(count < 2 ){
        count ++;
        click.parentNode.classList.add('selected');
        if(count == 1){
            firstImg = click.parentNode.dataset.name;
        }
        if(count == 2){
            lastImg = click.parentNode.dataset.name
        }
        if(lastImg !== "" && firstImg !== ""){
            if(firstImg === lastImg){
                setTimeout( hideSelect,delay);
            }
            setTimeout(reset,delay)
        }
    }
    rep = click
}