import { useState } from 'react'
// custom hooks
import useLocalStorage from './hooks/useLocalStorage';
//custom component
import { CustomForm } from './components/CustomForm';
import { EditForm } from './components/EditForm';
import Tasklist from './components/Tasklist';
import ThemeSwitcher from './components/ThemeSwitcher';
function App() {
  const [tasks, settasks] = useLocalStorage('react-todo.tasks', []);;
  const [EditedTask, setEditedTask] = useState(null);
  const [IsEdititng, setIsEdititng] = useState(false);
  const [previousFoucsEl, setpreviousFoucsEl] = useState(null);
  
  const addTask =(Task)=>{
    settasks(prevState=>[...prevState , Task])
  }
const deleteTask =(id) =>{
  settasks(prevState=>prevState.filter(t=>(t.id !== id)));
}
const ToggleCheckState =(id)=>{
  settasks(prevState=>prevState.map(t => (t.id == id ? 
    {...t ,checked: !t.checked } : t)
    ));
}
const UpdateTask =(task)=>{
  settasks(prevState=>prevState.map(t => (t.id === task.id ? 
    {...t ,name: task.name } : t)
    ));
    ClosthEditNode();
}
const EnterEditMode =(task)=>{
  setEditedTask(task);
  setIsEdititng(true);
  //set foucs back to original
  setpreviousFoucsEl(document.activeElement)
}
const ClosthEditNode =()=>{
  setIsEdititng(false);
  previousFoucsEl.focus();
}
  return (
    <div className="container">
      <header>
      <h1>My task List</h1>
    </header>
   { IsEdititng  &&
    (<EditForm EditedTask={EditedTask} UpdateTask={UpdateTask} ClosthEditNode={ClosthEditNode} />)
   } 
    <CustomForm addTask={addTask}/>
    {tasks && 
    <Tasklist 
    tasks={tasks} 
    deleteTask={deleteTask} 
    ToggleCheckState={ToggleCheckState} 
    EnterEditMode={EnterEditMode} />}
    <ThemeSwitcher />
    </div>
  )
}

export default App
