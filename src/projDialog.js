import {isInputsFilled,clearInputs} from './Dialog';
import {addProject,deleteProject} from './projOps';

const dialog=document.querySelector('#projDialog');
const confirmDialogBox=document.querySelector('#confirmDialog');

const closeBtn=document.querySelector('#proj-close');
const addBtn=document.querySelector('#proj-append');
const inputs=document.querySelectorAll('#projDialog input');

const confirmYes=document.querySelector('#confirmYes');

function openProjDialog(){
    clearInputs(inputs);
    dialog.showModal();
}

closeBtn.addEventListener('click',
    (event)=>{
        event.preventDefault();
        dialog.close();
    }
);

addBtn.addEventListener('click',
    (event)=>{
        event.preventDefault();
        if(isInputsFilled(inputs)){
            addProject(inputs[0].value);
            dialog.close();
        }
    }
);

confirmYes.addEventListener('click',
    (event)=>{
        event.preventDefault();
        deleteProject();
        confirmDialogBox.close();
    }
)

function openConfirmDialog(){
    confirmDialogBox.showModal();
}

export {openProjDialog,openConfirmDialog};



