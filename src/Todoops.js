import DOM from './DOM.js';
import StorageModule from './StorageModule.js';
import Todo from './Todo.js';
let id=0;
function addTodo(Todo){
    const TodoString=JSON.stringify(Todo);
    StorageModule.addItem(id++,TodoString);
    DOM.addTodo(Todo);
}

function retrieveTodo(id){
    const TodoObject=JSON.parse(StorageModule.retrieveItem(id));
    return TodoObject;

}

function createTodo(inputString){
    const [title,description,due,priority]=inputString.split("|");
    const TodoObject=new Todo(title,description,due,priority);
    return TodoObject;
}

export {addTodo,retrieveTodo,createTodo};