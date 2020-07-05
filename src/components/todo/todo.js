import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { v4 as uuidv4 } from 'uuid';
import './todo.scss';

function ToDo(props) {

  /*
  this method fired when you submit the form (form file)
  addItem method is used to add the id and complete properties to the item 
  and changing (the list) that inside main state 
 */
  const [list, listState] = useState([]);
  const [done, doneState] = useState(0);

  const addItem = (item) => {
    item._id = uuidv4();
    item.complete = false;
    listState( [...list, item] );
    // console.log('this.state.list in todo file',this.state.list);

  };
  //to change the complete value and in the browser it just render the item that changed not the whole items (the same setState)
  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let checkedList = list.map(listItem => listItem._id === item._id ? item : listItem);
      listState( checkedList );
    }

  };

  // its like componentDidMount() so just one implementation 
  useEffect(()=>{
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    listState( list );
  },[]);
  ///after every change will fire
  useEffect(()=>{
    // console.log(list.filter(item => !item.complete).length);
    doneState(list.filter(item => !item.complete).length);
  },[list]);

  return (
    <>
      <header>
        <h2>
            There are {done} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
          />
        </div>
      </section>
    </>
  );
}

export default ToDo;
