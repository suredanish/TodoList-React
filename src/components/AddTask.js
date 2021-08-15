import React from 'react';
import './AddTask.css'
export default function AddTask({handleAddTask}){
    const textInput = React.useRef(null);
    return(
        <div className="AddTask">
            <input type="text" ref={textInput} onKeyPress={(event) => {if(event.which === 13) handleAddTask(textInput)} }/>
            <button className="btnAddTask" onClick={()=> handleAddTask(textInput)}>Add Task</button>
        </div>
    )
}
