import React, { useRef } from 'react'
import { useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { todosAtom } from './store/atom/todos'

export const App = () => {
  const todos = useRecoilValue(todosAtom)

  return (
    <div>
      <Filter/>
      <AddToDo/>
      <div className='todo-list'>
        {todos.map((todo) => <ToDo key={todo.id} title={todo.title} description={todo.description}/>)}
      </div>
    </div>
  )
}


function AddToDo() {
  const titleRef = useRef()
  const descriptionRef = useRef()
  const setTodos = useSetRecoilState(todosAtom)

  function createTodo() {
    const title = titleRef.current.value
    const description = descriptionRef.current.value

    setTodos((prev) => [...prev, {id: Date.now(), title: title, description: description}])
  }

  return (
    <div>
      <input ref={titleRef} type="text" placeholder='Title'/>
      <input ref={descriptionRef} type="text" placeholder='Description'/>
      <button onClick={createTodo}>Add</button>
    </div>
  )
}

function Filter() {
  const filterRef = useRef()
  

  return (
    <div>
      <input ref={filterRef} type="text" placeholder='Search'/>
      <button onClick={handleFilter}>Search</button>
    </div>
  )
}

function ToDo({title, description}) {
  return (
    <div style={{border: '1px solid black', padding: '10px', margin: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Delete</button>
    </div>
  )
}