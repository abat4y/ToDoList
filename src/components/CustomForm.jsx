import React from 'react';
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
export const CustomForm = ({addTask}) => {
    const [task, setTask] = useState("");
    const handleFormSubmit =(e) =>{
        e.preventDefault();
        addTask({
          name:task,
          checked:false,
          id: Date.now()
        });
        setTask("");

        }
  return (
    <form className='todo'
    onSubmit={handleFormSubmit}>
    <div className="wrapper">
        <input type="text" className='input' id='task' 
        value={task}
        onInput={(e)=>setTask(e.target.value)}
        required
        autoFocus
        maxLength={60}
        placeholder="Enter Task"
        >
        </input>
    <label htmlFor='task' className='label'>Enter task</label>
    </div>
    <button 
    className="btn" aria-label="Add task"
    type="submit">
        
      <PlusIcon className="h-6 w-6 text-blue-500"/>
    </button>
    </form>
  )
}
