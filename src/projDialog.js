import Dialog from "./Dialog";
import Project from "./projOps";

const projDialogBox=(function(){
    const dialog=document.querySelector('#projDialog');
    const confirmDialogBox=document.querySelector('#confirmDialog');

    const closeBtn=document.querySelector('#proj-close');
    const addBtn=document.querySelector('#proj-append');
    const inputs=document.querySelectorAll('#projDialog input');

    const confirmYes=document.querySelector('#confirmYes');

    function openDialog(){
        Dialog.clearInputs(inputs);
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
            if(Dialog.isInputsFilled(inputs)){
                Project.addProject(inputs[0].value);
                dialog.close();
            }
        }
    );

    confirmYes.addEventListener('click',
        (event)=>{
            event.preventDefault();
            Project.deleteProject();
            confirmDialogBox.close();
        }
    )

    function openConfirmDialog(){
        confirmDialogBox.showModal();
    }

    return {openDialog,openConfirmDialog};

})();

export default projDialogBox;