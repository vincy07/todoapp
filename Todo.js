import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Todo = () => {

const [todo,setTodo]= useState('')
const [todos,setTodos]=useState([])

const addTodo=()=> {
setTodos([...todos,todo])
console.log(todos)
setTodo('')
}

  return (
    <div>
        <div className='header'>
      <Typography 
      variant='h4'>TO-DO APP</Typography>
      <br></br>
      <TextField 
      className='textfield'
      id="outlined-basic" 
      placeholder='WHAT TO DO ??'
      variant="outlined"
      value={todo}
      onChange={(event)=> setTodo(event.target.value)} />
    <br></br>
    <br></br>
    <Button 
    className='btn'
    color='success'
    variant='contained'
    onClick={addTodo}>
    ADD TO TASK
    </Button>
    <div className='list'>
      <ul>
        {
        todos.map((todo)=>(
          <li>{todo}</li>
        ))
      
        }
      </ul>
    </div>
        </div>
    </div>
  )
}

export default Todo
