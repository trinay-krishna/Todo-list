import Todo from './Todo.js';
import './styles.css';
import { addTodo,createTodo,retrieveTodo } from './Todoops.js';
import taskDialogBox from './taskDialog.js';
import projDialogBox from './projDialog.js';



const p=new Todo("Title","Des","tom",2);
const p2=new Todo("Title2","Des2","tom2",3);

const addTaskBtn=document.querySelector('#add-task');
const addProjBtn=document.querySelector('.proj-add');

addTaskBtn.addEventListener('click',taskDialogBox.openDialog);
addProjBtn.addEventListener('click',projDialogBox.openDialog);