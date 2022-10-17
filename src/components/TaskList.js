import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {

  function mapTasks (arr) {
   return arr.map((task)=>{
      return <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete}/>
    })
  }
  return (
    <div className="tasks">
      {mapTasks(tasks)}
    </div>
  );
}

export default TaskList;