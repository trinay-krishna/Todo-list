const StorageModule=(function(){
    
    function length(){
        return localStorage.length;
    }

    function addItem(id,item){
        item=JSON.stringify(item);
        localStorage.setItem(`${id}`,item);
    }
    
    function retrieveItem(key){
        const resultString=localStorage.getItem(key);
        const result=JSON.parse(resultString);
        return result;
    }

    function key(i){
        return localStorage.key(i)
    }

    function pushObject(key,object){
        const list=retrieveItem(key);
        list.push(object);
        const newLength=list.length;
        addItem(key,list);
        return newLength;
    }

    function deleteKey(key){
        localStorage.removeItem(key);
    }

    return {addItem,retrieveItem,key,length,pushObject,deleteKey};
})();

export default StorageModule;
