const addTodo = document.querySelector("#add-todo");
const todoInput = document.querySelector("#input-value");
const todoParentContainer = document.querySelector("#todo-parent-container");


// Show Todos on page function
const showTodos = () => {
	let AllTodosss = JSON.parse(localStorage.getItem("todos")) || [];
	let html1 = "";
	AllTodosss.forEach((todo) => {
		html1 += `<div class="flex items-center" >
        <p class="to-do-item p-2 grow" id=""> ${todo}</p>
        <span class="material-symbols-outlined text-red-600 cursor-pointer" onClick="deleteItem('${todo}')">delete</span>
    </div>`;
	});
	todoParentContainer.innerHTML = html1;
};

// Show to dos on page refresh
showTodos()


// Add todo in local storage then display it using showtodo() function
addTodo.addEventListener("click", () => {
	if (todoInput.value) {
		let AllTodos = JSON.parse(localStorage.getItem("todos")) || [];
		AllTodos.push(todoInput.value);
		localStorage.setItem("todos", JSON.stringify(AllTodos));
		todoInput.value = "";
		showTodos();
	}
});

todoInput.addEventListener("keydown", (e) => {
	if (todoInput.value && e.keyCode === 13) {
		let AllTodos = JSON.parse(localStorage.getItem("todos")) || [];
		AllTodos.push(todoInput.value);
		localStorage.setItem("todos", JSON.stringify(AllTodos));
		todoInput.value = "";
		showTodos();
	}
});

const deleteItem = (word) => {
	let AllTodos = JSON.parse(localStorage.getItem("todos")) || [];
	let newTodos = AllTodos.filter((item) => item !== word);
	localStorage.setItem("todos", JSON.stringify(newTodos));
	showTodos();
};




{/* <span class="material-symbols-outlined text-green-600 cursor-pointer pr-2">done</span> */}
{/* <span class="material-symbols-outlined text-sky-800 cursor-pointer pr-2">undo</span> */}