import DOM from './DOM.js';
import StorageModule from './StorageModule.js';
import Todo from './Todo.js';
import Project from './projOps';

function addTodo(Todo){
    const key=Project.getSelectedKey();
    StorageModule.pushObject(key,Todo);
    DOM.addTodo(Todo);
}

function retrieveTodo(id){
    const TodoObject=StorageModule.retrieveItem(id);
    return TodoObject;

}

function createTodo(inputString){
    const [title,description,due,priority]=inputString.split("|");
    const TodoObject=new Todo(title,description,due,priority);
    return TodoObject;
}

export {addTodo,retrieveTodo,createTodo};