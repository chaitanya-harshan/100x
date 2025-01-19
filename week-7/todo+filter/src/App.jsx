import React, { useRef } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { todosAtom, searchQueryAtom, filteredTodosSelector } from "./store/atom/todos";

export const App = () => {
  // Automatically get the filtered list from Recoil
  const filteredTodos = useRecoilValue(filteredTodosSelector);

  return (
    <div>
      <Filter />
      <AddToDo />
      <div className="todo-list">
        {filteredTodos.map((todo) => <ToDo key={todo.id} title={todo.title} description={todo.description} />)}
      </div>
    </div>
  );
};

function Filter() {
  // Set the search query in Recoil on each keystroke
  const setSearchQuery = useSetRecoilState(searchQueryAtom);

  function handleFilter(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={handleFilter} // Filter automatically on input change
      />
    </div>
  );
}

function AddToDo() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const setTodos = useSetRecoilState(todosAtom);

  function createTodo() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    setTodos((prev) => [...prev, { id: Date.now(), title, description }]);
  }

  return (
    <div>
      <input ref={titleRef} type="text" placeholder="Title" />
      <input ref={descriptionRef} type="text" placeholder="Description" />
      <button onClick={createTodo}>Add</button>
    </div>
  );
}

function ToDo({ title, description }) {
  return (
    <div style={{border: "4px solid black",padding: "10px",margin: "10px",display: "flex",flexDirection: "row",justifyContent: "space-between",}}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Delete</button>
    </div>
  );
}
