function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const head = document.querySelector('.header');
const progress = document.querySelector('.progress');

window.addEventListener('scroll',debounceFn(handle,2))
function handle(){
    roll = window.pageYOffset;
    headHeight = head.offsetHeight;
    if(roll>=headHeight){
        head.classList.add('is-fixed');
        document.body.style.paddingTop = `${headHeight}px`;
    }
    else{
        head.classList.remove('is-fixed');
        document.body.style.paddingTop = 0;
    }
    
    viewHeight = document.documentElement.clientHeight;
    documentHeight = document.documentElement.scrollHeight;
    rate = roll*100/(documentHeight-viewHeight);
    progress.style.width = `${rate}%`
    console.log(roll)
}