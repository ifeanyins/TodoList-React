import { useState } from 'react';
import './List.css';
import Header from './Header';
import Tasks from './Tasks';

const List = () => {
    const [tasks, setTasks] = useState(['make noodles', 'ifeanyi_ns']);
  return (
    <div className='List'>
      <div className='container'>
         <Header text = 'TodoList'/>
         <Tasks tasks={tasks}/>
      </div>
    </div>
  )
}

export default List
