import StorageModule from "./StorageModule";

const DOM=(function(){
    let taskList=null;

    function addTodo(Todo){
        if(!taskList)
            taskList=document.querySelector('.task-list');
        const listItem=document.createElement('li');

        const para=document.createElement('p');
        para.textContent=Todo.title;
        para.classList="task";

        listItem.appendChild(para);
        taskList.appendChild(listItem);
    }

    function renderList(){
        if(!taskList)
            taskList=document.querySelector('.task-list');
        taskList.textContent="";
        for(let i=0;i<StorageModule.length;i++){
            let TodoString=StorageModule.retrieveItem(StorageModule.key(i));
            let Todo=JSON.parse(TodoString);
            console.log(Todo.title);
            addTodo(Todo);
        }
    }

    function markInvalid(element){
        element.style.border="2px solid red";
    }

    function removeMark(element){
        element.style.border="";
    }

    return {addTodo,renderList,markInvalid,removeMark};
})();

export default DOM;