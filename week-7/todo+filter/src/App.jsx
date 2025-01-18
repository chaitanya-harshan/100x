import React from 'react'

export const App = () => {
  return (
    <div>
      <Todo/>
    </div>
  )
}


function Todo() {
  return (
    <div>
      <input type="text" placeholder='Title'/>
      <input type="text" placeholder='Description'/>
      <button>Add</button>
    </div>
  )
}