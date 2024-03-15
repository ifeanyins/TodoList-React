import { useState } from 'react';
import './List.css';
import Header from './Header';
import Tasks from './Tasks';
import Form from './Form';

const List = () => {
    
  
  return (
    <div className='List'>
      <div className='container'>
         <Header text = 'TodoList'/>
         {/* <Form /> */}
         <Tasks />
      </div>
    </div>
  )
}

export default List
