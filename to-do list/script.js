//selectiong elements
const input = document.querySelector(".text-todo");
const button = document.querySelector(".main-cta");
const todoList = document.querySelector(".todo-list");

//click on btn
button.addEventListener("click", function() {

    const text = input.value;

    if(text.trim() === "") {
        return;
    }


    //main div
    const newTodo = document.createElement("div");
    newTodo.classList.add('todo-item');

    //span for text
    const todoText = document.createElement('span');
    todoText.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function() {
        newTodo.remove();
    });

    //add text and btn into div
    newTodo.appendChild(todoText);
    newTodo.appendChild(deleteBtn);

    //add to list
    todoList.appendChild(newTodo);

    //clean input field
    input.value="";

});