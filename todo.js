// Element Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', AddTask);
todoList.addEventListener('click', CompleteDelete);

// Functions
function AddTask(event)
{
    // prevent form submit from refreshing page
    event.preventDefault();

    // display message to user if not task present
    if(todoInput.value == "")
    {
        alert("Please enter a to-do item");
    }
    else
    {
        // Create todo <div>
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        // Create to do list item <li>
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        // append or add as a child of our parent <div>
        todoDiv.appendChild(newTodo);
        
        // Create mark completed or tick icon
        const completedButton = document.createElement('button');
        completedButton.innerHTML = "<i class='fas fa-check'></i>";
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        // create bin icon or delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
        deleteButton.classList.add('trash-btn');
        todoDiv.appendChild(deleteButton);

        // append all of the above to our <ul> element
        todoList.appendChild(todoDiv);

        // clear input value
        todoInput.value = "";
    }

} // end function

function CompleteDelete(e)
{
    // save click when user clicks on trash icon
    const item = e.target;

    // delete the item when icon is clicked
    if(item.classList[0] === 'trash-btn')
    {
        const todo = item.parentElement;
        todo.remove();
    }

    // when tick icon is clicked mark item as completed
    if(item.classList[0] === 'complete-btn')
    {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


