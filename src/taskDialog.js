import { createTodo,addTodo } from "./Todoops";
import compareAsc from "date-fns/compareAsc";
import DOM from "./DOM";

const taskDialogBox=(function(){
    const dialog=document.querySelector('dialog');
    const diagClose=document.querySelector('#close');
    const diagAdd=document.querySelector('#close + button');

    const diagSelect=document.querySelector('#priority');
    let selectVal=1;

    const inputs=document.querySelectorAll('#diag input');

    function openDialog(){
        inputs.forEach(
            (input)=>{
                input.value="";
                DOM.removeMark(input);
            }
        );

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
                clearInvalidMarks();
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
        let isValid=true;
        inputs.forEach(
            (input)=>{
                if(input.value==""){
                    isValid=false;
                    DOM.markInvalid(input);
                }
                else
                    DOM.removeMark(input);
            }
        );
        if(isValid){
            const date=inputs[2].value;
            const DateObj=new Date(date);
            DateObj.setHours(11,59,59,99);
            if(compareAsc(DateObj,new Date())<0){
                isValid=false;
                DOM.markInvalid(inputs[2]);
            }
        }
        return isValid;
    }

    function clearInvalidMarks(){
        inputs.forEach(
            (input)=>DOM.removeMark(input)
        );
    }

    return {openDialog};
})();

export default taskDialogBox;