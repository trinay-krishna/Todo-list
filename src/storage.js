import DOM from './DOM.js';
let id=0;
function addTodo(Todo){
    const TodoString=JSON.stringify(Todo);
    localStorage.setItem(`${id++}`,TodoString);
    DOM.renderList();
}

function retrieveTodo(id){
    const Todo=JSON.parse(localStorage.getItem(`${id}`));
    return Todo;

}

export {addTodo,retrieveTodo};