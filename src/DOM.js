import StorageModule from "./StorageModule";
import Project from "./projOps";

const DOM=(function(){
    let taskList=null;
    let projectList=null;

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

    function renderList(key){
        if(!key)
            return;
        if(!taskList)
            taskList=document.querySelector('.task-list');
        taskList.textContent="";
        const list=StorageModule.retrieveItem(key);
        list.forEach(
            (Todo)=>addTodo(Todo)
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