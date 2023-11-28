import DOM from "./DOM";

const Dialog=(function(){
    function isInputsFilled(inputs){
        let isFilled=true;
        inputs.forEach(
            (input)=>{
                if(input.value===""){
                    isFilled=false;
                    DOM.markInvalid(input);
                }
                else
                    DOM.removeMark(input);   
            }
        );
        return isFilled;
    }

    function clearInvalidMarks(inputs){
        inputs.forEach(
            (input)=>DOM.removeMark(input)
        );
    }

    function clearInputs(inputs){
        inputs.forEach(
            (input)=>{
                input.value="";
                DOM.removeMark(input);
            }
        );
    }

    return {isInputsFilled,clearInvalidMarks,clearInputs};
})();

export default Dialog;