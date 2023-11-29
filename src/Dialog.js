import {markInvalid,removeMark} from './DOM';

function isInputsFilled(inputs){
    let isFilled=true;
    inputs.forEach(
        (input)=>{
            if(input.value===""){
                isFilled=false;
                markInvalid(input);
            }
            else
                removeMark(input);   
        }
    );
    return isFilled;
}

function clearInvalidMarks(inputs){
    inputs.forEach(
        (input)=>removeMark(input)
    );
}

function clearInputs(inputs){
    inputs.forEach(
        (input)=>{
            input.value="";
           removeMark(input);
        }
    );
}

export {isInputsFilled,clearInvalidMarks,clearInputs};
