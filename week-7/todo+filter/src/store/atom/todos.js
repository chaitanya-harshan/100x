import {atom, selector} from 'recoil'

export const todosAtom = atom({
    key: "todos",
    default: []
})

export const todosFilter = selector({
    key: "filter",
    get: ({get}) => {
        const todos = get(todosAtom);
        const searchResults = todos.filter((todo) => todo.title.toLowerCase().includes())
    }
})