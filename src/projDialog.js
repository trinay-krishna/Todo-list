import Dialog from "./Dialog";

const projDialogBox=(function(){
    const dialog=document.querySelector('#projDialog');

    const closeBtn=document.querySelector('#proj-close');
    const addBtn=document.querySelector('#proj-append');
    const inputs=document.querySelectorAll('#projDialog input');

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
                console.log(inputs[0].value);
                dialog.close();
            }
        }
    );

        return {openDialog};

})();

export default projDialogBox;