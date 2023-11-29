
function getStorageLength(){
    return localStorage.length;
}

function addItemToStorage(id,item){
    item=JSON.stringify(item);
    localStorage.setItem(`${id}`,item);
}

function retrieveItemFromStorage(key){
    const resultString=localStorage.getItem(key);
    const result=JSON.parse(resultString);
    return result;
}

function storageKey(i){
    return localStorage.key(i)
}

function pushObjectToStorage(key,object){
    const list=retrieveItemFromStorage(key);
    list.push(object);
    const newLength=list.length;
    addItemToStorage(key,list);
    return newLength;
}

function deleteKeyFromStorage(key){
    localStorage.removeItem(key);
}

export {addItemToStorage,retrieveItemFromStorage,storageKey,getStorageLength,pushObjectToStorage,deleteKeyFromStorage};

