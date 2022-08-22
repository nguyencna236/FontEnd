window.addEventListener('load',loadweb);
function loadweb(){
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

    window.addEventListener('scroll',debounceFn(handle,50))
    function handle(){
        hei = head.offsetHeight;
        if(window.pageYOffset>=hei){
            head.classList.add('is-fixed');
            document.body.style.paddingTop = `${hei}px`
        }
        else{
            head.classList.remove('is-fixed');
            document.body.style.paddingTop = 0;
        }
    }

}
