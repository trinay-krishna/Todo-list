import DOM from './DOM.js';
import StorageModule from './StorageModule.js';
let id=0;
function addTodo(Todo){
    const TodoString=JSON.stringify(Todo);
    StorageModule.addItem(id++,TodoString);
    DOM.renderList();
}

function retrieveTodo(id){
    const Todo=JSON.parse(StorageModule.retrieveItem(id));
    return Todo;

}

export {addTodo,retrieveTodo};