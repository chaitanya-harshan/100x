import { useState } from "react";

export function CreateTodo(props) {
  // react-query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addTodo() {
    // axios
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(async function (res) {
      const json = await res.json();
      alert("Todo added");
    });
  }

  return (
    <div>
      <input
        id="title" style={{padding: 10,margin: 10,}} type="text" placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>{" "}
      <br />

      <input 
        id="desc" style={{padding: 10,margin: 10,}} type="text" placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      ></input>{" "}
      <br />

      <button style={{ padding: 10,margin: 10,}} onClick={addTodo}>
        Add a todo
      </button>
    </div>
  );
}
