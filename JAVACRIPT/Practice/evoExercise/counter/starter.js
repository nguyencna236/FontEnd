const num = document.querySelector('.counter-number')
const next = document.querySelector('.counter-increase')
const priv = document.querySelector('.counter-descrease')
var i =0;
document.body.onclick = (e)=>{
    if(next.contains(e.target)){
        console.log(e.target)
        i +=1;
        num.textContent = `${i}`;
    }
    if(priv.contains(e.target)){
        console.log(e.target)
        if(i<=0) i=0;
        else i -=1;
        num.textContent = `${i}`;
    }
}
