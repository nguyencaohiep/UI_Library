import storage from "./util/storage.js"
const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        completed: todo => todo.completed,
        uncompleted: todo => !todo.completed
    }
}


const actions = {
    add({ todos}, title) {
        if(title){
            title = title[0].toUpperCase() + title.slice(1)
            todos.push({title, completed: false, hidden: false})
            storage.set(todos)
        }
    },
    toggle({ todos }, index) {
        const todo = todos[index]
        todo.completed = !todo.completed
    },
    remove({ todos }, index) {
        todos.splice(index,1)
    },
    filter(state, value){
        state.filter = value
    },
    clearAll({ todos }){
        todos.splice(0)
        storage.set(todos)
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}