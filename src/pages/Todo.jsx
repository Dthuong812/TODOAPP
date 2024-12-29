import React, { useState } from 'react'
import AddTodo from '../components/todoApp/addTodo'
import DataTodo from '../components/todoApp/dataTodo'
const Todo = () => {
    const [dataTodo,setDataTodo]= useState([])
    const addNewTodo = (name)=>{
        const newTodo = {
            id : randomIntFromInterval(1,20000),
            name:name
        }
        console.log(newTodo)
        setDataTodo([...dataTodo,newTodo])
    }
    const randomIntFromInterval =(min,max)=>{
        return Math.floor(Math.random()*(max-min+1)+min);
      }
    const deleteTodo = (id)=>{
        const newTodo = dataTodo.filter(item=>item.id !== id)
        setDataTodo(newTodo)
    }
    const toggleComplete = (id) => {
        setDataTodo((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };
    return (
        <>
            <AddTodo addNewTodo= {addNewTodo}></AddTodo>
            {dataTodo.length>0 ? 
            <DataTodo dataTodo= {dataTodo}
                deleteTodo ={deleteTodo}
                toggleComplete={toggleComplete}
            ></DataTodo>
            :
            <div >
                <h2>Hello Dạ Thương nè !!!!</h2>
            </div>
            }
            
        </>
    )
}

export default Todo