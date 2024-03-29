import React from 'react'
import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

const Tasklist = ({tasks ,deleteTask ,ToggleCheckState ,EnterEditMode}) => {
  return (
   <ul className={styles.tasks}>
    {tasks.sort((a,b)=>b.id - a.id).map(task=>(
    <TaskItem 
    key={task.id} 
    task={task}
    deleteTask={deleteTask}
    ToggleCheckState={ToggleCheckState}
    EnterEditMode={EnterEditMode}
    />))}
   </ul>
  )
}

export default Tasklist