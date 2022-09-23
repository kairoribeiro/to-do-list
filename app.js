
/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


/*----------------------------- Event Listeners -----------------------------*/
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

/*-------------------------------- Functions --------------------------------*/

function addTodo(event) {
    event.preventDefault(); // Prevent form from submiting
    //Create a DIV
    const todoDiv = document.createElement("div"); // Create a div
        todoDiv.classList.add("todo"); // add class to div
    const newTodo = document.createElement("li"); // Create li
        newTodo.innerText = todoInput.value; // set content
        newTodo.classList.add("todo-item"); // add class to li
    todoDiv.appendChild(newTodo); // put the li inside the div
    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    // append to list in html
    todoList.appendChild(todoDiv);
    //clear input box after typing
    todoInput.value = "";
}


function deleteCheck(event) {
    const item = event.target;
    //delete todo
    if(item.classList[0] === "delete-btn") {
        const todo = item.parentElement; // get the parent element from the btn clicked
        //animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }
    //check mark
    if(item.classList[0] === "completed-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(todo.classList.contains("uncompleted")) {
                    todo.style.display ="flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
    
}