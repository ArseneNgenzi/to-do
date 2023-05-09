const addTodo = document.querySelector("#add-todo");
const todoInput = document.querySelector("#input-value");
const todoParentContainer = document.querySelector("#todo-parent-container");
const errMsg = document.querySelector('#err-msg')
const priority = document.querySelector('#priority')


const showError = () => {
		errMsg.classList.remove('hidden')
}
const hideError = () => {
	errMsg.classList.add('hidden')
}
// let date

// Show Todos on page function
const showTodos = () => {
	let AllTodosss = JSON.parse(localStorage.getItem("todos")) || [];

	// console.log(AllTodosss)
	// console.log(priority.value)

	let html1 = "";
	AllTodosss.forEach((todo, index) => {
		html1 += `<div class="p-2 border-b border-black " >
		<div class="flex items-center"> 
			<p class="to-do-item  grow font-bold" id=""> ${todo.item}</p>
			<span class="material-symbols-outlined text-red-600 cursor-pointer" onClick="deleteItem('${todo.id}')">delete</span>
		</div>
		<div class="text-sm flex justify-between">
		<p> Priority <span class="text-blue-600"> ${todo.priority} </span></p>
		<p>${todo.date}</p>
		</div>
		
	</div> 
		`;
	});
	todoParentContainer.innerHTML = html1;
};

// Show to dos on page refresh
showTodos()


// Add todo in local storage then display it using showtodo() function
addTodo.addEventListener("click", () => {
	if (todoInput.value) {
		
		let aTodoObject = {
			id: Date.now(),
			item: todoInput.value,
			date: new Date().toLocaleString(),
			priority: priority.value
		}
		let AllTodos = JSON.parse(localStorage.getItem("todos")) || [];
		AllTodos.push(aTodoObject);
		localStorage.setItem("todos", JSON.stringify(AllTodos));
		todoInput.value = "";
		showTodos();
		// console.log(aTodoObject)
	} 
	else {
		showError()
		setTimeout(hideError, 2000)
	}
});

todoInput.addEventListener("keydown", (e) => {
	if (e.keyCode === 13 && todoInput.value) {
		let aTodoObject = {
			id: Date.now(),
			item: todoInput.value,
			date: new Date().toLocaleString(),
			priority: priority.value
		}
		let AllTodos = JSON.parse(localStorage.getItem("todos")) || [];
		AllTodos.push(aTodoObject);
		localStorage.setItem("todos", JSON.stringify(AllTodos));
		todoInput.value = "";
		showTodos();
	} 
	else if(e.keyCode === 13 && !todoInput.value) {
		showError()
		setTimeout(hideError, 2000)
	}
	
});

const deleteItem = (id) => {
	let AllTodos = JSON.parse(localStorage.getItem("todos")) || [];
	// console.log('AllTodos: ', AllTodos)
	let newTodos = AllTodos.filter((item) => item.id != id);
	// console.log('Filtered: ', newTodos)
	localStorage.setItem("todos", JSON.stringify(newTodos));
	showTodos();
	// console.log(id)
};




{/* <span class="material-symbols-outlined text-green-600 cursor-pointer pr-2">done</span> */}
{/* <span class="material-symbols-outlined text-sky-800 cursor-pointer pr-2">undo</span> */}