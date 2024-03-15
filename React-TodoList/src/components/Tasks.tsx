import { useState } from 'react';
import { Key } from "react";
import {FaTimes} from "react-icons/fa";
import Button from './Button';

const Tasks = ( ) => {
  const [tasks, setTasks] = useState(['make noodles', 'ifeanyi_ns']);
  const [newTasks, setNewTasks] = useState('');

  const handleInputChange = (e: any) => {
    setNewTasks(e.target.value)
  }

  const deleteTask = (idx: number) => {
      const filteredArr = tasks.filter((_, i) => i !== idx);
      setTasks(filteredArr)
  }

  const AddTask = () => {
    setTasks([...tasks, newTasks])
  }
  return (
    <>
     <div>
        <label >
          <span>Task</span>
            <br />
            <input  type="text" value={newTasks} onChange={handleInputChange}/>
       </label>
      <Button btnText={"Save"} bgcolor={"black"} color={"white"} width={"400px"} onClick={AddTask}/>
    </div>
    <ul>
      {tasks.map((e, idx) => <li key={idx} >{e}<FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={()=> deleteTask(idx)}/></li>)}
    </ul>
    </>
  )
}

export default Tasks
// get each index for tasks