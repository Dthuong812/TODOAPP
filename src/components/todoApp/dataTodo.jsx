import { Button, Checkbox } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react'

const DataTodo = (props) => {
    const {dataTodo,deleteTodo,toggleComplete}= props
    const handleDelete =(id)=>{
        deleteTodo(id)
    }
    const handleToggleComplete = (id) => {
        toggleComplete(id);
    };
    return (
       <div style={{ marginTop:"30px"}}>
        {dataTodo.map((item,index)=>{
            return (
                <div style={{display:"flex", alignItems:"center" , justifyContent: "space-between"}} key ={item.id}>
                <div style={{
                    display:"flex"
                    }}>
                <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => handleToggleComplete(item.id)}
                        />
                     <p
                            style={{
                                marginLeft: "10px",
                                textDecoration: item.completed ? "line-through" : "none",
                                color: item.completed ? "gray" : "black",
                            }}
                        >
                            {item.name}
                        </p>
                </div>
                    <Button style={{
                        marginRight:"2px",
                    }}
                    onClick={() => handleDelete(item.id)}
                    ><DeleteOutlined /></Button>
                </div>
                    )
            })}
       </div>
    )
}

export default DataTodo