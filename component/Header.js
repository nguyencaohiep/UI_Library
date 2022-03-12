import html from '../core.js'


function Header () {
    return html
    `
    <header>
        Todo List
    </header>
    <div id="form">
        <input type="text" class="todo-input" onkeyup="event.keyCode === 13 && dispatch('add', this.value.trim())">
    </div>
    `
}


export default Header