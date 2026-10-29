import TodoEntry from "./TodoEntry";

const addButton: HTMLButtonElement|null = document.querySelector("#todoAddButton");
const inputTextField: HTMLInputElement|null = document.querySelector("#todoInputField") ;
const todosContainer: HTMLDivElement = document.querySelector("#todoContainer")!;



let arrayOfTodos: TodoEntry[] = [];
function buidList() {
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(todo => {
        todosContainer.innerHTML += todo.render()
    })
}

if (addButton && inputTextField && todosContainer){

    addButton?.addEventListener('click',(e) =>{
        arrayOfTodos.push(
            new TodoEntry(arrayOfTodos.length,inputTextField?.value)
        );
        inputTextField.value='';

    });
}


function deleteTodo(id:number){
    arrayOfTodos = arrayOfTodos.filter(todo => todo.id !== id);
    buidList();
}
