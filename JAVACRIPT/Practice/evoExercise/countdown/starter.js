
const d = document.querySelector('.days')
const h = document.querySelector('.hours')
const p = document.querySelector('.minutes')
const s = document.querySelector('.seconds')

function time(){ 
    if(timeStampEnd < 0 || isNaN(timeStampEnd) ) return;
    timeStampCurrent = (new Date()).getTime();
    time = (timeStampEnd - timeStampCurrent)/1000;

    d.textContent = `0${parseInt(time/86400)}`.slice(-2);
    h.textContent = `0${parseInt(time%86400/3600)}`.slice(-2);
    p.textContent = `0${parseInt(time%86400%3600/60)}`.slice(-2);
    s.textContent = `0${parseInt(time%86400%3600%60)}`.slice(-2);
}
function ok(date){
    timeskip(date)
    setInterval(time,1000)
}
function timeskip(date){
    timeStampEnd = (new Date(date)).getTime();
}
ok('2022,8,11')

