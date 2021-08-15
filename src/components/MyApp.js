import React from 'react';
import Todo from './Todo';
import AddTask from './AddTask'
class MyApp extends React.Component{
    constructor(){
        super()
        this.state={todoList:[]}
        this.handleClick= this.handleClick.bind(this)
        this.handleAddTask= this.handleAddTask.bind(this)
        this.deleteTask= this.deleteTask.bind(this)
    }
    
    handleClick(id){
        
        const newTodoList = this.state.todoList.map(task =>{
            if(id === task.id) task.checked =! task.checked;
            return task;
        })
        this.setState({todoList:newTodoList})
    }
    handleAddTask(event){
        const value= event.current.value.trim();
        if (value === "") return;
        const t = this.state.todoList
        this.setState({ todoList:t.concat([{id:t.length, task: value, checked: false}]) })
        event.current.value="";
    }

    deleteTask(id){
        console.log(id);
        var todoList=this.state.todoList
        var ttodoList=[]
        var idCount = 0;
        for(var i=0; i< todoList.length; i++){
            if(i === id) continue;
            else {
                const t= todoList[i];
                ttodoList.push({id:idCount, task: t.task, checked: t.checked})
                idCount+=1;
            }
        }
        this.setState({todoList:ttodoList})
    }
    render(){
        const rendorTodoList = this.state.todoList.map(task => <Todo key={task.id} task={task} handleClick={this.handleClick} handleDelete={this.deleteTask}/>)
        return(
            
            <div>
                <AddTask handleAddTask={this.handleAddTask}/>
                {rendorTodoList}
            </div>
        )
    }
    
}

export default MyApp;



