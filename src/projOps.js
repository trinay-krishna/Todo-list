import {renderProjectList,addProjectDOM} from './DOM';
import {addItemToStorage,deleteKeyFromStorage,getStorageLength} from './StorageModule';

let selected="";
function addProject(name){
    const index=getStorageLength();
    const key=`${name}%$%${index}`;
    addItemToStorage(key,[]);
    addProjectDOM(index,name);
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
    deleteKeyFromStorage(selected);
    selected="";
    renderProjectList();
}

export {addProject,getSelectedKey,setSelectedKey,deleteProject};


