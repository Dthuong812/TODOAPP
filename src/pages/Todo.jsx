import React from 'react'
import AddTodo from '../components/todoApp/addTodo'
const Todo = () => {
    const addNewTodo = (name)=>{
        const newTodo = {
            id : randomIntFromInterval(1,20000),
            name:name
        }
        console.log(newTodo)
    }
    const randomIntFromInterval =(min,max)=>{
        return Math.floor(Math.random()*(max-min+1)+min);
      }
    return (
        <>
            <AddTodo addNewTodo= {addNewTodo}></AddTodo>
        </>
    )
}

export default Todo