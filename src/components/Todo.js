import React from 'react'
import "./Todo.css"
import delImage from "./dustbin.png"

function Todo(props) {
    const compStyle= {
        color: "grey"
    }
    return(
        <div className="aTask">
            <input className="checkInp" type='checkbox' checked = {props.task.checked} onChange={() => props.handleClick(props.task.id)}/>
            <p style = {props.task.checked? compStyle:null }>{props.task.task}
            <button style={{display:props.task.checked?null:"none"}} className="btnDelTask" onClick={()=>props.handleDelete(props.task.id)}><img src={delImage}/></button>
            </p>
        </div>
    )
}

export default Todo