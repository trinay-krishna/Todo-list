
function addTodo(Todo){
    const TodoString=JSON.stringify(Todo);
    localStorage.setItem("1",TodoString);
}

function retrieveTodo(id){
    const Todo=JSON.parse(localStorage.getItem(`${id}`));
    return Todo;

}

export {addTodo,retrieveTodo};