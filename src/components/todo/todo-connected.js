import React, { useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import SiteEditor from './site';
import Pagination from './pagination';


import Auth from '../auth/';



import useAjax from '../../hooks/useAjax';


import './todo.scss';

// const todoAPI = 'https://lab3232.herokuapp.com/todo';
const ToDo = () => {
  const [list, _addItem, _toggleComplete, _getTodoItems, deleteHandler] = useAjax();
  useEffect(_getTodoItems, []);
  console.log('list', list);
  return (

    <>
      <SiteEditor />


      <header>
        <h2>
          There are {list.filter(item => !item.complete).length};
          Items To Complete
        </h2>
      </header>

      <section className="todo">

        <Auth capability="update">
          <div>
            <TodoForm handleSubmit={_addItem} />
          </div>
        </Auth>


        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            deleteHandler1={deleteHandler}
          />
          <Pagination list={list} />
        </div>

      </section>
    </>
  );
};

export default ToDo;
