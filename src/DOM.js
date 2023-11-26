const Dom=(function(){
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
        for(let i=0;i<localStorage.length;i++){
            let TodoString=localStorage.getItem(localStorage.key(i));
            let Todo=JSON.parse(TodoString);
            console.log(Todo.title);
            addTodo(Todo);
        }
    }

    return {addTodo,renderList};
})();

export default Dom;