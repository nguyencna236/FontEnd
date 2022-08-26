window.addEventListener('load',load)
function load(){
    const text = document.querySelector('.text')
    text.addEventListener('mouseenter',handle)

    function handle(e){
        const title = e.target.dataset.tooltip;
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip-text')
        tooltip.textContent = title;
        document.body.appendChild(tooltip)
        
        const value = e.target.getBoundingClientRect();
        const {top,left,width} = value;
        tooltipHeight = tooltip.offsetHeight;
        tooltip.style.top = `${top-tooltipHeight-20}px`
        tooltip.style.left = `${left-width/2}px`;
    }

    text.addEventListener('mouseleave',(e)=>{
        tooltip = document.querySelector('.tooltip-text')
        if (!tooltip) return;
        tooltip.parentNode.removeChild(tooltip)
    })
}
