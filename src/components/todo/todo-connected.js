import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import SiteEditor from './site';
import Pagination from './pagination';



import useAjax from '../../hooks/useAjax';


import './todo.scss';

// const todoAPI = 'https://lab3232.herokuapp.com/todo';
const ToDo = () => {
  const [list, _addItem, _toggleComplete, _getTodoItems, deleteHandler] = useAjax();
  useEffect(_getTodoItems, []);

  return (

    <>
      <SiteEditor/>

      
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length};
          Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            deleteHandler1={deleteHandler}
          />
          <Pagination list={list}/>
        </div>

      </section>
    </>
  );
};

export default ToDo;
