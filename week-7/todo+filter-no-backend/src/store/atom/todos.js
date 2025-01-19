// store/atom/todos.js
import { atom, selector } from "recoil";

export const todosAtom = atom({
  key: "todos",
  default: [],
});

export const searchQueryAtom = atom({
  key: "searchQueryAtom",
  default: "",
});

export const filteredTodosSelector = selector({
  key: "filteredTodosSelector",
  get: ({ get }) => {
    const query = get(searchQueryAtom).toLowerCase();
    const todos = get(todosAtom);

    if (!query) return todos;

    return todos.filter((todo) =>
        todo.title.toLowerCase().includes(query) ||
        todo.description.toLowerCase().includes(query)
    );
  },
});
