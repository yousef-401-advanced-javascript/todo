import React from 'react';

function TodoList (props) {

  return (
    <ul>
      {props.list.map(item => (
        console.log('item list',item),
        <li
          className={`complete-${item.complete.toString()}`}key={item._id}>

          <span onClick={() => props.handleComplete(item._id)}> {item.text}   </span>

          {/* <button onClick={props.deleteHandler1(item._id)}>Delete</button> */}

        </li>
      ))}
    </ul>
  );
}

export default TodoList;
