const img = `
<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;

const sub = document.querySelector('.button')
sub.onclick = ()=> document.body.insertAdjacentHTML('beforeend',img);

document.body.addEventListener('click',handle);
function handle(e){
  if(e.target.matches('.modal-close')){
    const modal = e.target.parentNode.parentNode;
    console.log(modal);
    modal.parentNode.removeChild(modal);
  } 
}
