window.addEventListener('load',load)
function load(){
    const tab = document.querySelector('.tab');
    const list = document.querySelector('.tab-list')
    const item = document.querySelectorAll('.tab-item');
    
    item.forEach((item)=>item.addEventListener('click',handle))
    function handle(e){
        item.forEach((item)=>item.classList.remove('active'))
        this.classList.add('active')

        tabLeft = tab.offsetLeft;
        itemLeft = e.target.offsetLeft;
        list.scroll((itemLeft-tabLeft)/2,0)
        console.log(itemLeft)
    }
}