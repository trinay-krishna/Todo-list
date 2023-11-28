import { createTodo,addTodo, editTodo } from "./Todoops";
import compareAsc from "date-fns/compareAsc";
import DOM from "./DOM";
import Dialog from "./Dialog";
import Project from "./projOps";

const taskDialogBox=(function(){
    const dialog=document.querySelector('#taskDiag');
    const diagClose=document.querySelector('#close');
    const diagAdd=document.querySelector('#close + button');

    const diagSelect=document.querySelector('#priority');
    let selectVal="orange";

    const inputs=document.querySelectorAll('#taskDiag input');

    function openDialog(){
        if(Project.getSelectedKey()==="")
            return;
        Dialog.clearInputs(inputs);
        dialog.showModal();
    }

    dialog.addEventListener('close',
        ()=>{
            diagAdd.textContent="Add";
        }
    );

    diagClose.addEventListener('click',
        (event)=>{
            event.preventDefault();
            dialog.close()
        }
    )

    diagAdd.addEventListener('click',
        (event)=>{
            event.preventDefault();
            if(checkInputs()){
                Dialog.clearInvalidMarks(inputs);
                const inputString=fetchInputs();
                if(diagAdd.textContent==="Edit"){
                    editTodo(inputString);
                    dialog.close();
                    return;
                }
                addTodo(createTodo(inputString));
                dialog.close();
            }
            else    
                console.log("Invalid")
        }
    );

    diagSelect.addEventListener('change',
        ()=>{
            selectVal=diagSelect.value;
        }
    );

    function fetchInputs(){
        let inputString="";
        inputs.forEach(
            (input)=>inputString+=(input.value+"|")
        );
        inputString+=`${selectVal}`;
        return inputString;
    }

    function checkInputs(){
        let isValid=Dialog.isInputsFilled(inputs);
        if(isValid){
            const date=inputs[2].value;
            const DateObj=new Date(date);
            DateObj.setHours(23,59,59,99);
            if(compareAsc(DateObj,new Date())<0){
                isValid=false;
                DOM.markInvalid(inputs[2]);
            }
        }
        return isValid;
    }

    function openEditDialog(Todo){
        diagAdd.textContent="Edit";
        openDialog();
        inputs[0].value=Todo.title;
        inputs[1].value=Todo.description;
        inputs[2].value=Todo.dueDate;
    }

    return {openDialog,openEditDialog};
})();

export default taskDialogBox;