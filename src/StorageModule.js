const StorageModule=(function(){
    let length=localStorage.length;
    function addItem(id,item){
        localStorage.setItem(`${id}`,item);
    }
    
    function retrieveItem(key){
        return localStorage.getItem(key);
    }

    function key(i){
        return localStorage.key(i)
    }

    return {addItem,retrieveItem,key,length};
})();

export default StorageModule;
