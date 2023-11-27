import { createTodo,addTodo } from "./Todoops";
import compareAsc from "date-fns/compareAsc";
import DOM from "./DOM";
import Dialog from "./Dialog";

const taskDialogBox=(function(){
    const dialog=document.querySelector('#taskDiag');
    const diagClose=document.querySelector('#close');
    const diagAdd=document.querySelector('#close + button');

    const diagSelect=document.querySelector('#priority');
    let selectVal=1;

    const inputs=document.querySelectorAll('#taskDiag input');

    function openDialog(){
        Dialog.clearInputs(inputs);
        dialog.showModal();
    }

    dialog.addEventListener('close',
        ()=>{
            console.log("CLOSED");
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
            console.log(DateObj,new Date());
            if(compareAsc(DateObj,new Date())<0){
                isValid=false;
                DOM.markInvalid(inputs[2]);
            }
        }
        return isValid;
    }

    return {openDialog};
})();

export default taskDialogBox;