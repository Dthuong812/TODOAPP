import React, { useState } from 'react'
import { Button, Input, message } from 'antd'
const AddTodo = (props) => {
    const {addNewTodo} = props
    const [addTodo,setAddTodo]= useState("")
    const handleOnChange=(name)=>{
        setAddTodo(name)
    }
    const handleClick=()=>{
        if (addTodo.trim() === "") {
            message.warning("Please enter a valid todo!");
            return;
        }
        addNewTodo(addTodo.trim());
        setAddTodo("");
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
        value={addTodo}
        />
    <Button type="primary" onClick={handleClick}>Add</Button>
    </div>
  )
}

export default AddTodo