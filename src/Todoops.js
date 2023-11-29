import Todo from './Todo.js';
import {addTodoDOM,renderList} from './DOM';
import {addItemToStorage,retrieveItemFromStorage,pushObjectToStorage} from './StorageModule';
import {getSelectedKey} from './projOps';


let editIndex=-1;
function addTodo(Todo){
    const key=getSelectedKey();
    const newLength=pushObjectToStorage(key,Todo);
    addTodoDOM(Todo,newLength);
}

function createTodo(inputString){
    const [title,description,due,priority]=inputString.split("|");
    const TodoObject=new Todo(title,description,due,priority);
    return TodoObject;
}

function deleteTodo(index){
    const key=getSelectedKey();
    const list=retrieveItemFromStorage(key);
    const newList=[...list.slice(0,index),...list.slice(index+1)];
    addItemToStorage(key,newList);
    renderList(key);
}

function retrieveTodo(index){
    const key=getSelectedKey();
    const list=retrieveItemFromStorage(key);
    return list[index];
}

function editTodo(inputString){
    const key=getSelectedKey();
    const list=retrieveItemFromStorage(key);
    const newTodo=createTodo(inputString);
    newTodo.isComplete=list[editIndex].isComplete;
    list[editIndex]=newTodo;
    addItemToStorage(key,list);
    renderList(key);
}

function toggleComplete(index){
    const key=getSelectedKey();
    const list=retrieveItemFromStorage(key);
    const TodoObject=list[index];
    TodoObject.isComplete=!TodoObject.isComplete;
    addItemToStorage(key,list);
    renderList(key);
}

function getEditIndex(){
    return editIndex;
}

function setEditIndex(value){
    editIndex=value;
}

export {addTodo,createTodo,deleteTodo,editTodo,getEditIndex,setEditIndex,retrieveTodo,toggleComplete};