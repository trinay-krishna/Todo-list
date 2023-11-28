import StorageModule from "./StorageModule";
import Project from "./projOps.js";
import Edit from './pen-solid.svg';
import Delete from './trash-solid.svg';


const DOM=(function(){
    let taskList=null;
    let projectList=null;

    function addTodo(Todo,newLength){
        if(!taskList)
            taskList=document.querySelector('.task-list');
        const listItem=document.createElement('li');

        const div=createTodoItem(Todo);
        div.setAttribute('data-index',newLength-1);
        div.style.borderLeft=`7px solid ${Todo.priority}`;
        if(Todo.isComplete)
            div.style.borderTop="7px solid green";
        listItem.appendChild(div);
        taskList.appendChild(listItem);
    }

    function createTodoItem(Todo){
        const div=document.createElement('div');
        div.classList="task";

        const infoDiv=document.createElement('div');
        const title=document.createElement('p');
        const description=document.createElement('p');
        title.textContent=Todo.title;
        description.textContent=Todo.description;

        infoDiv.appendChild(title);
        infoDiv.appendChild(description);

        const buttonSpan=document.createElement('span');
        const doneBtn=document.createElement('button');
        doneBtn.textContent="✓";
        doneBtn.classList="Check-Btn";
        const deleteBtn=document.createElement('button');
        deleteBtn.classList="Delete-Btn";
        const editBtn=document.createElement('button');
        editBtn.classList="Edit-Btn";

        const deleteImage=new Image();
        deleteImage.src=Delete;
        deleteImage.height=20;
        deleteImage.width=10;
        const editImage=new Image();
        editImage.src=Edit;
        editImage.height=20;
        editImage.width=10;

        deleteBtn.appendChild(deleteImage);
        editBtn.appendChild(editImage);

        buttonSpan.appendChild(doneBtn);
        buttonSpan.appendChild(deleteBtn);
        buttonSpan.appendChild(editBtn);

        div.appendChild(infoDiv);
        div.appendChild(buttonSpan);

        return div;

    }

    function renderList(key){
        if(!taskList)
            taskList=document.querySelector('.task-list');
        taskList.textContent="";
        if(!key)
            return;
        const list=StorageModule.retrieveItem(key);
        list.forEach(
            (Todo,index)=>addTodo(Todo,index+1)
        );
    }

    function renderProjectList(){
        if(!projectList)
            projectList=document.querySelector('#project-list');
        projectList.textContent="";
        for(let i=0;i<StorageModule.length();i++){
            const [name,index]=(StorageModule.key(i)).split("%$%");
            addProject(index,name);
        }
        renderList(Project.getSelectedKey());
    }

    function markInvalid(element){
        element.style.border="2px solid red";
    }

    function removeMark(element){
        element.style.border="";
    }

    function addProject(index,name){
        if(!projectList)
            projectList=document.querySelector('#project-list');
        const key=`${name}%$%${index}`;
        const listItem=document.createElement('li');
        const projBtn=document.createElement('button');
        projBtn.setAttribute('data-proj',key);
        projBtn.textContent=name;
        highlightSelectedBtn(projBtn);

        listItem.appendChild(projBtn);
        projectList.appendChild(listItem);
        renderList(key);
    }

    function highlightSelectedBtn(selectedBtn){
        const prevSelectedKey=Project.getSelectedKey();
        if(prevSelectedKey!==""){
            const prevSelectedBtn=document.querySelector(`button[data-proj="${prevSelectedKey}"]`);
            prevSelectedBtn.classList="";
        }
        selectedBtn.classList="highlight";
        const selectedKey=selectedBtn.getAttribute('data-proj');
        Project.setSelectedKey(selectedKey);
    }



    return {addTodo,renderList,markInvalid,removeMark,addProject,renderProjectList,highlightSelectedBtn};
})();

export default DOM;