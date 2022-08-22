window.addEventListener('load',loadweb)
function loadweb(){
    hover = document.querySelector('.text');
    hover.addEventListener('mouseenter',handlehover);
    function handlehover(e){
        tooltip = document.createElement('div');
        tooltip.classList.add('tooltip-text')
        tooltip.textContent = e.target.dataset.tooltip;
        document.body.appendChild(tooltip)

        value = e.target.getBoundingClientRect();
        const {top,left,width} = value;
        height = tooltip.offsetHeight;
        widths = hover.offsetWidth;
        console.log(width)

        tooltip.style.top = `${top-height-20}px`;
        tooltip.style.left = `${left-widths/2}px`;

    }

    hover.addEventListener('mouseleave',Delete)
    function Delete(){
        tip = document.querySelector('.tooltip-text');
        if(!tip) return;
        tip.parentNode.removeChild(tip)
    }
}
  