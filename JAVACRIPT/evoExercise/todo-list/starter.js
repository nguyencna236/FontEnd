const submit = document.querySelector('.todo-submit');
const input = document.querySelector('.todo-input');
const list = document.querySelector('.todo-list');
const form = document.querySelector('.todo-form')
// const todo = JSON.parse(localStorage.getItem("todoList")) || [];
const todo = localStorage ? JSON.parse(localStorage.getItem("todoList")) : [];

if(Array.isArray(todo) && todo.length > 0){
    todo.forEach((item)=>createTemple(item))
}

function createTemple(title){
    const template = 
    `<div class="todo-item">
        <span class="todo-text">${title}</span>
        <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
    </div> `
    list.insertAdjacentHTML('afterbegin',template)
}

form.addEventListener('submit',handle)
function handle(e){
    e.preventDefault();
    text = input.value;
    createTemple(text);

    todo.push(text)
    localStorage.setItem("todoList", JSON.stringify(todo));

    input.value = '';
};

list.addEventListener('click',dele);
function dele(e){
    if(e.target.matches('.todo-remove')){
        e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        content = e.target.previousElementSibling.textContent;

        index = todo.findIndex((item)=>item==content);
        todo.splice(index,1)

        localStorage.setItem('todoList',JSON.stringify(todo))
    }
}