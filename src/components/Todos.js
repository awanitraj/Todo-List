import React from 'react'
import TodoItem from '../components/TodoItem'

export default function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto"

  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className=' my-3'>Todos List</h3>
      {props.todos.length===0? "No Todos":
      props.todos.map((todo )=>{
        return (
        <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/> 
        
        )
      })
    }
      
    </div>
  )
}
