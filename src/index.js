import './styles.css';
import Todo from './Todo';
import {openTaskDialog,openEditDialog} from './taskDialog';
import {openProjDialog,openConfirmDialog} from './projDialog';
import {renderList,renderProjectList,highlightSelectedBtn} from './DOM';
import {deleteTodo,setEditIndex,retrieveTodo,toggleComplete} from './Todoops';
import {addItemToStorage,getStorageLength} from './StorageModule';

const addTaskBtn=document.querySelector('#add-task');
const addProjBtn=document.querySelector('.proj-add');
const deleteProjBtn=document.querySelector('.proj-delete');

if(!getStorageLength()){
    const defaultTodo=new Todo("Laundry","Do the Laundry","2023-11-29","orange",true);
    addItemToStorage('House Work%$%0',[defaultTodo]);
}

renderProjectList();
addTaskBtn.addEventListener('click',openTaskDialog);
addProjBtn.addEventListener('click',openProjDialog);
deleteProjBtn.addEventListener('click',openConfirmDialog);

const projectList=document.querySelector('#project-list');
projectList.addEventListener('click',
    (event)=>{
        const target=event.target;
        const key=target.getAttribute('data-proj');
        if(!key)
            return;
        highlightSelectedBtn(target);
        renderList(key);
    }
);

const taskList=document.querySelector('.task-list');

taskList.addEventListener('click',
    (event)=>{
        const composedPath=event.composedPath();
        if(composedPath[0].tagName!=="BUTTON")
            return;
        const dataIndex=composedPath[2].getAttribute('data-index');
        const button=composedPath[0].getAttribute('class');
        const firstChar=button.charAt(0);
        if(firstChar==='C')
            toggleComplete(+dataIndex);
        else if(firstChar==="D")
            deleteTodo(+dataIndex);
        else{
            setEditIndex(+dataIndex);
            openEditDialog(retrieveTodo(+dataIndex));
        }
    }
);