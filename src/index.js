import Todo from './Todo.js';
import './styles.css';
import taskDialogBox from './taskDialog.js';
import projDialogBox from './projDialog.js';
import DOM from './DOM.js';



const p=new Todo("Title","Des","tom",2);
const p2=new Todo("Title2","Des2","tom2",3);

const addTaskBtn=document.querySelector('#add-task');
const addProjBtn=document.querySelector('.proj-add');

DOM.renderProjectList();
addTaskBtn.addEventListener('click',taskDialogBox.openDialog);
addProjBtn.addEventListener('click',projDialogBox.openDialog);

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
)