const addTodo = document.querySelector('#add-todo')
// const test = document.querySelector('#test')
const todoValue = document.querySelector('#input-value')
const todoParentContainer = document.querySelector('#todo-parent-container')


// Load tasks from local storage if available
let todos = JSON.parse(localStorage.getItem('todos'))  || []

// Render todos from local storage
todos.forEach((todo) => {
    
    const divTodo = document.createElement('div')
    const paragraph = document.createElement('p')
    const spanDone = document.createElement('span')
    const spanDelete = document.createElement('span')
    const spanUndo = document.createElement('span')

    // adding classes to new elements created
    divTodo.classList.add('flex', 'items-center')
    paragraph.classList.add('p-2', 'grow')
    spanDone.classList.add('material-symbols-outlined', 'text-green-600', 'cursor-pointer', 'pr-2', 'spanDone')
    spanDelete.classList.add('material-symbols-outlined', 'text-red-600', 'cursor-pointer', 'spanDelete')
    spanUndo.classList.add('material-symbols-outlined', 'text-sky-700', 'cursor-pointer', 'pr-2', 'hidden')


    // Adding texts inside paragraph and span elements
    paragraph.innerText = todo
    spanDone.innerText = 'done'
    spanDelete.innerText = 'delete'
    spanUndo.innerText = 'undo'

    // Appending elements
    divTodo.appendChild(paragraph)
    divTodo.appendChild(spanDone)
    divTodo.appendChild(spanUndo)
    divTodo.appendChild(spanDelete)
    todoParentContainer.appendChild(divTodo)
    todoValue.value = ''

    // Mark as completed

    spanDone.addEventListener('click', () => {
        divTodo.style.backgroundColor = 'rgba(38, 109, 82, .5)'
        spanDone.classList.add('hidden')
        spanUndo.classList.remove('hidden')
    })

    // Undo done

    spanUndo.addEventListener('click', () => {
        divTodo.style.backgroundColor = 'transparent'
        spanDone.classList.remove('hidden')
        spanUndo.classList.add('hidden')
    })

    // Delete todo

    const trashButtons = document.querySelectorAll('.spanDelete')


    spanDelete.addEventListener('click', (e) => {
        todoParentContainer.removeChild(e.target.parentElement)
            })

  });

  // Add task to list and save to local storage
  const addNewTask = () => {
    const todo = todoValue.value;
    // if (!task) return;
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    const divTodo = document.createElement('div')
    const paragraph = document.createElement('p')
    const spanDone = document.createElement('span')
    const spanDelete = document.createElement('span')
    const spanUndo = document.createElement('span')

    // adding classes to new elements created
    divTodo.classList.add('flex', 'items-center')
    paragraph.classList.add('p-2', 'grow')
    spanDone.classList.add('material-symbols-outlined', 'text-green-600', 'cursor-pointer', 'pr-2', 'spanDone')
    spanDelete.classList.add('material-symbols-outlined', 'text-red-600', 'cursor-pointer', 'spanDelete')
    spanUndo.classList.add('material-symbols-outlined', 'text-sky-700', 'cursor-pointer', 'pr-2', 'hidden')


    // Adding texts inside paragraph and span elements
    paragraph.innerText = todo
    spanDone.innerText = 'done'
    spanDelete.innerText = 'delete'
    spanUndo.innerText = 'undo'

    // Appending elements
    divTodo.appendChild(paragraph)
    divTodo.appendChild(spanDone)
    divTodo.appendChild(spanUndo)
    divTodo.appendChild(spanDelete)
    todoParentContainer.appendChild(divTodo)
    todoValue.value = ''

    // Mark as completed

    spanDone.addEventListener('click', () => {
        divTodo.style.backgroundColor = 'rgba(38, 109, 82, .5)'
        spanDone.classList.add('hidden')
        spanUndo.classList.remove('hidden')
    })

    // Undo done

    spanUndo.addEventListener('click', () => {
        divTodo.style.backgroundColor = 'transparent'
        spanDone.classList.remove('hidden')
        spanUndo.classList.add('hidden')
    })

    // Delete todo

    const trashButtons = document.querySelectorAll('.spanDelete')


    spanDelete.addEventListener('click', (e) => {
        todoParentContainer.removeChild(e.target.parentElement)
            })

            const deleteTodo = (id) => {
                let fromLocalStorage = JSON.parse(localStorage.getItem('todos'))
                todos.splice(id, 1)
            }

  }





addTodo.addEventListener('click', addNewTask )