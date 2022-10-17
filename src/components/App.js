import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const showTasks = tasks.filter((task)=>category === "All" || task.category === category)

  function handleDelete(delTask){
    const deletedItem = tasks.filter((task)=>{
      return task.text !== delTask;
    })
    
    setTasks(deletedItem)
  }

  function handleAdd(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES.filter((cat)=>cat !== "All")} onTaskFormSubmit={handleAdd}/>
      <TaskList tasks={showTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;