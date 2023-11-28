import './styles.css';
import taskDialogBox from './taskDialog.js';
import projDialogBox from './projDialog.js';
import DOM from './DOM.js';
import {deleteTodo,setEditIndex,retrieveTodo} from './Todoops';
import Dialog from './Dialog';

const addTaskBtn=document.querySelector('#add-task');
const addProjBtn=document.querySelector('.proj-add');
const deleteProjBtn=document.querySelector('.proj-delete');

DOM.renderProjectList();
addTaskBtn.addEventListener('click',taskDialogBox.openDialog);
addProjBtn.addEventListener('click',projDialogBox.openDialog);
deleteProjBtn.addEventListener('click',projDialogBox.openConfirmDialog);

const projectList=document.querySelector('#project-list');
projectList.addEventListener('click',
    (event)=>{
        const target=event.target;
        const key=target.getAttribute('data-proj');
        if(!key)
            return;
        DOM.highlightSelectedBtn(target);
        DOM.renderList(key);
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
            console.log("Check");
        else if(firstChar==="D")
            deleteTodo(+dataIndex);
        else{
            setEditIndex(+dataIndex);
            taskDialogBox.openEditDialog(retrieveTodo(+dataIndex));
        }
    }
);