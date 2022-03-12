import html from '../core.js'

function TodoItem ({ todo, index }) {
    return html
    `
    <div class="todo ${todo.completed && 'completed'} ${todo.hidden && 'hidden'}">
        <li class="todo-item">${todo.title}</li>
        <button class="complete-btn" onclick="dispatch('toggle', ${index})"><i class="fa-solid fa-circle-check"></i></button>
        <button class="trash-btn" onclick="dispatch('remove', ${index})"><i class="fa-solid fa-trash"></i></button>
    </div>
    `
}

export default TodoItem