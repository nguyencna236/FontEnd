
const playimage = document.querySelector('.player-image')
const input = document.querySelector('.bar')
const song = document.querySelector('#song')
const timeSong = document.querySelector('.player-duration')
const timeCurrent = document.querySelector('.player-remaining')
const next = document.querySelector('.player-next')
const prev = document.querySelector('.player-prev');
const play = document.querySelector('.player-play')

const listMusic = ['holo','home','spark','summer'];
var pause = true;
var index = listMusic.findIndex((item)=>`./files/${item}.mp3` == song.getAttribute('src'));
console.log(index)

next.addEventListener('click',()=>handleMove(1));
prev.addEventListener('click',()=>handleMove(-1))
song.addEventListener('ended',()=>handleMove(1))
play.addEventListener('click',music);

function handleMove(number){
    var length = listMusic.length-1;

    if(number == 1){
        index ++;
        if(index > length) index = 0;
        newMusic = `./files/${listMusic[index]}.mp3`
        song.setAttribute('src',newMusic)
        pause = true;
        music()
    }
    else{
        index --;
        if(index < 0) index = length;
        newMusic = `./files/${listMusic[index]}.mp3`;
        song.setAttribute('src',newMusic);
        pause = true;
        music()
    }
}

function music(){
    if(pause){
        song.play();
        pause = false;
        play.classList.add('fa-pause');
        play.classList.remove('fa-play'); 
        playimage.classList.add('is-playing')
    }
    else{
        song.pause();
        pause = true;
        play.classList.add('fa-play');
        play.classList.remove('fa-pause');
        playimage.classList.remove('is-playing')
    }
}
// setInterval( ()=>console.log(song.duration),1000)

setInterval( ()=>time(),500); 

function time(){
    const {duration,currentTime} = song;
    minute = parseInt(duration/60);
    secont = parseInt(duration%60);
    timeSong.textContent = `${minute}:${secont}`;

    curminute = parseInt(currentTime/60);
    cursecont = `0${parseInt(currentTime%60)}`.slice(-2);
    timeCurrent.textContent = `${curminute}:${cursecont}`;

    input.value = currentTime;  // ko được dùng setAttribute('value',currentTime) 
    input.max = duration;      // set là đặt cứng gtri đó nên ko thay đổi được, nên dùng input.value

}

input.addEventListener('change',handleBar)
function handleBar(){
    song.currentTime = input.value
    
}



