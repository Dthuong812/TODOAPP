import React, { useState } from 'react'
import { Button, Input } from 'antd'
const AddTodo = (props) => {
    const {addNewTodo} = props
    const [addTodo,setAddTodo]= useState()
    const handleOnChange=(name)=>{
        setAddTodo(name)
    }
    const handleClick=()=>{
        addNewTodo(addTodo)
        console.log("Add thành công",addTodo)
        setAddTodo(" ")
    }
  return (
    <div style={{
        display:"flex",
    }}>
    <Input 
        placeholder="Add todo"
        style={{marginRight:"10px",
        width: "300px",
        }} 
        onChange={(event)=>handleOnChange(event.target.value)}
        />
    <Button type="primary" onClick={handleClick}>Add</Button>
    </div>
  )
}

export default AddTodo