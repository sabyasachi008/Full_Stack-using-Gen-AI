let todos = [];


function addTodos() {

    const input = document.getElementById("todoInput");
    
    const text = input.value.trim();

    if(text === "") {
        return;
    }

    todos.push({
        id:Date.now(),
        text:text,
        completed:false
    });

    input.value = "";
    render();
    saveTodos();
    progressTracker();
}


function deleteTodo(id) {
    todos = todos.filter((todo) =>
    todo.id !== id);        
    //will create a new array excluding the todo with the given id

    render();
    progressTracker();
    saveTodos();
}

function toggleTodo(id) {
    todos = todos.map((todo) => 
    todo.id === id ? {
        ...todo,
        completed: !todo.completed,
    } : todo);

    render();
    saveTodos();
    progressTracker();
}
function render() {

    const list = document.getElementById("todoList");

    list.innerHTML = todos.map((todo) =>
    `
        <li>
            <input type="checkbox"
            ${todo.completed ? "checked" : ""} onchange="toggleTodo(${todo.id})"/>
            <span class="todo-text ${todo.completed ? "completed" :""}">${todo.text}</span>

            <button class="delete-btn" onClick="deleteTodo(${todo.id})">Delete</button>

        </li>
    `
    ).join("");

    saveTodos();
    progressTracker();
}


document.getElementById("todoInput").addEventListener("keypress", (e) => {
    if (e.key === 'Enter') addTodos();
});

//save it in the local storage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

//load the presaved things when the page is reload
function loadTodos() {
    const saved = localStorage.getItem("todos");

    if(saved) {
        todos = JSON.parse(saved);

    }

    render();
}


loadTodos();

function progressTracker() {

    const progBar = document.querySelector(".progress-bar");
    const comTodos = todos.filter((todo) => todo.completed === true).length;
    const progText = document.getElementById("progressText");
    const totalTodos = todos.length;
    
    //handle empty case.
    if(totalTodos === 0) {
        progBar.style.width  = "0%";
        progText.textContent = "0% Completed";
        return;
        
    }
    const prog = Math.round((comTodos/totalTodos)*100);
    progBar.style.width = `${prog}%`;
    
    document.getElementById("progressText").textContent = `${prog}% Completed`;


}