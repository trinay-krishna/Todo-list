import Todo from './Todo.js';
import './styles.css';
import { addTodo,retrieveTodo } from './storage.js';

const p=new Todo("Title","Des","tom",2);
const p2=new Todo("Title2","Des2","tom2",3);
addTodo(p2);
addTodo(p);