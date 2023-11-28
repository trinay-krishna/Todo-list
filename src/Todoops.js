import DOM from './DOM.js';
import StorageModule from './StorageModule.js';
import Todo from './Todo.js';
import Project from './projOps.js';


let editIndex=-1;
function addTodo(Todo){
    const key=Project.getSelectedKey();
    const newLength=StorageModule.pushObject(key,Todo);
    DOM.addTodo(Todo,newLength);
}

function createTodo(inputString){
    const [title,description,due,priority]=inputString.split("|");
    const TodoObject=new Todo(title,description,due,priority);
    return TodoObject;
}

function deleteTodo(index){
    const key=Project.getSelectedKey();
    const list=StorageModule.retrieveItem(key);
    const newList=[...list.slice(0,index),...list.slice(index+1)];
    StorageModule.addItem(key,newList);
    DOM.renderList(key);
}

function retrieveTodo(index){
    const key=Project.getSelectedKey();
    const list=StorageModule.retrieveItem(key);
    return list[index];
}

function editTodo(inputString){
    const key=Project.getSelectedKey();
    const list=StorageModule.retrieveItem(key);
    const newTodo=createTodo(inputString);
    list[editIndex]=newTodo;
    StorageModule.addItem(key,list);
    DOM.renderList(key);
}

function getEditIndex(){
    return editIndex;
}

function setEditIndex(value){
    editIndex=value;
}

export {addTodo,createTodo,deleteTodo,editTodo,getEditIndex,setEditIndex,retrieveTodo};