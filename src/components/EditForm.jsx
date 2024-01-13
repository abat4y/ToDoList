import React from 'react';
import { useState ,useEffect } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
export const EditForm = ({EditedTask ,UpdateTask ,ClosthEditNode }) => {
  const [UpdatedTaskName, setUpdatedTaskName] = useState(EditedTask.name);
  useEffect(()=>{
    const closeModalEscaped =(e) =>{
      if ( e.key === "Escape")  ClosthEditNode();
    }
window.addEventListener('keydown', closeModalEscaped);
return ()=> window.removeEventListener("keydown",closeModalEscaped);
  },[])
  const handleFormSubmit = (e) => {
    e.preventDefault();
    UpdateTask({...EditedTask , name:UpdatedTaskName});
  }
  return (
    <div role="dialog" aria-labelledby='EditTask' onClick={(e)=>{e.target=== e.currentTarget && ClosthEditNode()}}>
      <form className='todo'
        onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input type="text" className='input' id='task'
            value={UpdatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Edit Task"
          >
          </input>
          <label htmlFor='task' className='label'>Edit Task</label>
        </div>
        <button
          className="btn" aria-label={`Confirm Edit Task ${UpdatedTaskName}`}
          type="submit">
          <PencilSquareIcon className="h-6 w-6 text-blue-500" />
        </button>
      </form>
    </div>

  )
}
