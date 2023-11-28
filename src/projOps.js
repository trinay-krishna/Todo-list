import DOM from "./DOM";
import StorageModule from "./StorageModule";

const Project=(function(){
    let selected="";
    function addProject(name){
        const index=StorageModule.length();
        const key=`${name}%$%${index}`;
        StorageModule.addItem(key,[]);
        DOM.addProject(index,name);
    }

    function getSelectedKey(){
        return selected;
    }

    function setSelectedKey(key){
        selected=key;
    }

    function deleteProject(){
        if(selected==="")
            return;
        StorageModule.deleteKey(selected);
        selected="";
        DOM.renderProjectList();
    }

    return {addProject,getSelectedKey,setSelectedKey,deleteProject};
})();

export default Project;