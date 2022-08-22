const template = `
    <div class="sweet-alert">
             <i class="fa fa-check sweet-icon"></i>
            <p class="sweet-text">Congratulations on learning JS</p>
    </div>`;

const button = document.querySelector('.button')
button.addEventListener('click',handle)
function handle(e){
    document.body.insertAdjacentHTML('afterbegin',template)
}