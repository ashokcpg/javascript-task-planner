// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
//Adding an event when the button is clicked...
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterTodo);

// Functions

function addTodo(event){
   

        //Prevent form from submitting
    event.preventDefault();
    // console.log('Clicked!!!');   made browser to refresh automatically

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    
    // Template text 
    // newTodo.innerText = 'hey';
    
    // To put the value from the input section
    newTodo.innerText = todoInput.value;
    
    newTodo.classList.add('todo-item');

    // Adding newTodo to todoDiv
    todoDiv.appendChild(newTodo);

    //Checkmark Button goes here

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Trash Button goes here

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to the list, that is .todoList

    todoList.appendChild(todoDiv);

    //  Clearing the input value after appending
    todoInput.value = "";
}

function deleteCheck(e){
    // console.log(event.target);
// For Trash 
    const item = e.target;

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //For delete animation
        todo.classList.add('fall');
        //Delete item after ending the transition
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    // For Checkmark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("Completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    // console.log(todos);

    todos.forEach(function(todo) {
    //e.target is the option. And value is the value of the option.
    // That is, all, completed or uncompleted.    
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    });
}